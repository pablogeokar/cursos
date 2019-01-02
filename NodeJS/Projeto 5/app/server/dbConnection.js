const mongoose = require('mongoose');
const config = require('../../config/config');

let uri = `mongodb://${config.db.host}/${config.db.name}`;

let connection = mongoose.connect(uri, {useNewUrlParser: true});

module.exports = connection;