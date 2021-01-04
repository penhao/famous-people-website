import express, {Request, Response} from "express";
import next from "next";

const {createServer} = require('https');
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

/*const httpsOptions = {
    key: readFileSync('./certificates/key.pem'),
    cert: readFileSync('./certificates/cert.pem')
};

app.prepare()
    .then(() => {
        createServer(httpsOptions, (req, res) => {
            const parsedUrl = parse(req.url, true);
            handle(req, res, parsedUrl);
        }).listen(port, err => {
            if (err) throw err;
            console.log(`> Ready on https://localhost:${port}`);
        })
    });*/

(async () => {
    try {
        await app.prepare();
        const server = express();
        server.all("*", (req: Request, res: Response) => {
            return handle(req, res);
        });
        server.listen(port, (err?: any) => {
            if (err) throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();