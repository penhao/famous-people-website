import express, {Request, Response} from "express";
import next from "next";

const http = require('http');
const https = require('https');
const {readFileSync} = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const ports = {
    dev: 3000, http: 80, https: 443
};
const app = next({dev});
const handle = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
    server.all('*', (req: Request, res: Response) => {
        return handle(req, res)
    });
    http.createServer(server).listen(dev ? ports.dev : ports.http);
    if (!dev) {
        const httpsOptions = {
            key: readFileSync('/home/centos/myserver.key'),
            cert: readFileSync('/home/centos/ssl/certificate.pem'),
            ca: readFileSync('/home/centos/server.csr')
        };
        https.createServer(httpsOptions, server).listen(ports.https);
    }
});
