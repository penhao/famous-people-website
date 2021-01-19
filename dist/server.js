"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var next_1 = __importDefault(require("next"));
var createServer = require('https').createServer;
var parse = require('url').parse;
var readFileSync = require('fs').readFileSync;
var dev = process.env.NODE_ENV !== 'production';
var port = parseInt(process.env.PORT, 10) || 3000;
var sslPort = 443;
var app = next_1.default({ dev: dev });
var handle = app.getRequestHandler();
app.prepare()
    .then(function () {
    if (dev) {
        var server = express_1.default();
        server.all("*", function (req, res) {
            return handle(req, res);
        });
        server.listen(dev ? port : sslPort, function (err) {
            if (err)
                throw err;
            console.log("> Ready on localhost:" + port + " - env " + process.env.NODE_ENV);
        });
    }
    else {
        var httpsOptions = {
            key: readFileSync('/home/centos/myserver.key'),
            ca: readFileSync('/home/centos/3A0E47BFC8835AD9412EEEBFE31AAEC2.cer'),
            cert: readFileSync('/home/centos/server.csr')
        };
        createServer(httpsOptions, function (req, res) {
            var parsedUrl = parse(req.url, true);
            handle(req, res, parsedUrl);
        }).listen(sslPort, function (err) {
            if (err)
                throw err;
            console.log("> Ready on https://localhost:" + port);
        });
    }
});
/*app.prepare().then(() => {
    const server = express();
    server.all("*", (req: Request, res: Response) => {
        return handle(req, res);
    });
    server.listen(dev ? port : sslPort, (err?: any) => {
        if (err) throw err;
        console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
});*/
