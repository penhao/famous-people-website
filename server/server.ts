import express, { Request, Response } from "express";
import next from "next";

const http = require("http");
const https = require("https");
const { readFileSync } = require("fs");

const dev = process.env.NODE_ENV !== "production";
const ports = {
    dev: 3000,
    http: 80,
    https: 443,
};
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
    server.all("*", (req: Request, res: Response) => {
        return handle(req, res);
    });
    http.createServer(server).listen(dev ? ports.dev : ports.http);
    if (!dev) {
        const httpsOptions = {
            key: readFileSync("/home/centos/ssl_new/myserver.key", "utf-8"),
            //cert: readFileSync('/home/centos/ssl_new/certificate.pem',"utf-8"),
            cert: readFileSync("/home/centos/ssl_new/server.crt", "utf-8"),
            ca: readFileSync("/home/centos/ssl_new/eCA1_GTLSCA.crt", "utf-8"),
            requestCert: true,
            rejectUnauthorized: false,
        };
        https.createServer(httpsOptions, server).listen(ports.https);
    }
});
