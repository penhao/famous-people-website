import express, {Request, Response} from "express";
import next from "next";

const {createServer} = require('https');
const {parse} = require('url');
const {readFileSync} = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;
const sslPort = 443;
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        if (dev) {
            const server = express();
            server.all("*", (req: Request, res: Response) => {
                return handle(req, res);
            });
            server.listen(dev ? port : sslPort, (err?: any) => {
                if (err) throw err;
                console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
            });
        } else {
            const httpsOptions = {
                key: readFileSync('/home/centos/myserver.key'),
                ca: readFileSync('/home/centos/3A0E47BFC8835AD9412EEEBFE31AAEC2.cer'),
                cert: readFileSync('/home/centos/server.csr')
            };
            createServer(httpsOptions, (req: Request, res: Response) => {
                const parsedUrl = parse(req.url, true);
                handle(req, res, parsedUrl);
            }).listen(sslPort, (err?: any) => {
                if (err) throw err;
                console.log(`> Ready on https://localhost:${port}`);
            })
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
