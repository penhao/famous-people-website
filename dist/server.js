"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var next_1 = __importDefault(require("next"));
var http = require('http');
var https = require('https');
var readFileSync = require('fs').readFileSync;
var dev = process.env.NODE_ENV !== 'production';
var ports = {
    dev: 3000, http: 80, https: 443
};
var app = next_1.default({ dev: dev });
var handle = app.getRequestHandler();
var server = express_1.default();
app.prepare().then(function () {
    server.all('*', function (req, res) {
        return handle(req, res);
    });
    http.createServer(server).listen(dev ? ports.dev : ports.http);
    if (!dev) {
        var httpsOptions = {
            key: readFileSync('/home/centos/myserver.key'),
            cert: readFileSync('/home/centos/ssl/certificate.pem'),
            ca: readFileSync('/home/centos/server.csr')
        };
        https.createServer(httpsOptions, server).listen(ports.https);
    }
});
