/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_server_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/server/server */ \"./src/app/server/server.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/config */ \"./src/config/config.js\");\n/* importar as configurações do servidor */\n\n //Faz a leitura ddo config.js no objeto 'config.server.porta'\n\nvar porta = _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].server.porta;\n/** */\n\n/* parametrizar a porta de escuta */\n\n_app_server_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen(porta, function () {\n  console.log('Servidor WEB iniciado com sucesso na porta: ' + porta);\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/app/server/server.js":
/*!**********************************!*\
  !*** ./src/app/server/server.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var consign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! consign */ \"consign\");\n/* harmony import */ var consign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(consign__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-validator */ \"express-validator\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_7__);\n/** importa as variáveis de configuração */\n\n/* importar o módulo do framework express */\n\n\n/** \r\n* importar o módulo helmet (responsável por \r\n* fornecer uma camada extra de sgurança ao express.js) \r\n* */\n\n\n/* importar o módulo do consign */\n\n\n/* importar o módulo do body-parser */\n\n\n/* importar o módulo do express-validator */\n\n\n/** importar o módulo do express-session */\n\n\n/** importa o módulo de conexão ao banco de dados mongodb */\n\n\n/* iniciar o objeto do express */\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\n/* setar as variáveis 'view engine' e 'views' do express */\n\napp.set('view engine', 'ejs');\napp.set('views', './app/views');\n/** utiliza o helmet para fornecer uma camada extra de segurança no servidor */\n\napp.use(helmet__WEBPACK_IMPORTED_MODULE_2___default()());\n/* configurar o middleware express.static */\n\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static('./app/public'));\n/* configurar o middleware body-parser */\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded({\n  extended: true\n}));\n/* configurar o middleware express-validator */\n\napp.use(express_validator__WEBPACK_IMPORTED_MODULE_5___default()());\n/** configurar o middleware express-session */\n\napp.use(express_session__WEBPACK_IMPORTED_MODULE_6___default()({\n  secret: \"\".concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].session.chave),\n  resave: false,\n  saveUninitialized: false\n}));\n/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */\n\nconsign__WEBPACK_IMPORTED_MODULE_3___default()().include('dist/app/routes') //.then('./config/config.js')\t\n.then('dist/app/models').then('dist/app/controllers').into(app);\n/*** CONECTA AO BANCO DE DADOS MONGODB*/\n\nvar uri = \"mongodb://\".concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].db.host, \"/\").concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].db.name);\nmongoose__WEBPACK_IMPORTED_MODULE_7___default.a.connect(uri, {\n  useNewUrlParser: true\n}, function (err, res) {\n  if (err) {\n    console.log('ERRO ao conectar o banco de dados na url: ' + uri + '. ' + err);\n  } else {\n    console.log('Banco de Dados conectado com sucesso na url: ' + uri);\n  }\n});\nmongoose__WEBPACK_IMPORTED_MODULE_7___default.a.Promise = global.Promise;\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/app/server/server.js?");

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** Criação do objeto responsável por armazenar as configurações gerais do app */\nvar config = {};\nconfig.db = {};\nconfig.session = {};\nconfig.server = {};\n/*****************************************/\n\n/**  CONFIGURAÇÕES BANCO DE DADOS MONGODB*/\n\nconfig.db.host = 'localhost:27017';\nconfig.db.name = 'got';\n/*****************************************/\n\n/**  CONFIGURAÇÕES DO SERVIDOR WEB       */\n\nconfig.server.porta = 80;\n/*****************************************/\n\n/** OUTRAS CONFIGURAÇÕES */\n\nconfig.session.chave = '00A02105B7E11190C50254CFA9729DBD1E69F126241664AFF3EB98F177DF84B8';\n/** Torna a variável disponível para outros módulos */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./src/config/config.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "consign":
/*!**************************!*\
  !*** external "consign" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"consign\");\n\n//# sourceURL=webpack:///external_%22consign%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n\n//# sourceURL=webpack:///external_%22express-validator%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });