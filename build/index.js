"use strict";

var _server = require("./server");

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {static} from 'express';


var PORT = 3000;
var HOST = '0.0.0.0';

// server.use('/', static('public'))

_server2.default.listen(PORT, HOST);
console.log("Running on http://" + HOST + ":" + PORT);