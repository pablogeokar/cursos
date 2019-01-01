/* importar as configurações do servidor*/
const app = require('./config/server');

/** parametrizar a porta de escuta */
var server = app.listen(8080, () => {
    console.log('Servidor onLine');
})

/** utiliza websockets para reponder requisições na porta do servidor */
var io = require('socket.io').listen(server);

/** variável global para ser utilizada em qualquer objeto */
app.set('io', io);

/** criar a conexão por websocket */
io.on('connection', (socket) => {
    console.log('Usuário conectou');

    socket.on('disconnect', () => {
        console.log('Usuário desconectou');
    });

    socket.on('msgParaServidor', (data) => {
        /**Diálogo */
        socket.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem });
        socket.broadcast.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem });

        /** Participantes */
        if (parseInt(data.apelido_atualizado_nos_clientes) == 0){
        socket.emit('participantesParaCliente', { apelido: data.apelido });
        socket.broadcast.emit('participantesParaCliente', { apelido: data.apelido });
        }
    });

});