import Express from 'express';
import path from 'path';
import logger from 'morgan';
import proxy from 'express-http-proxy';
import fs from 'fs';
import url from 'url';

function createConsole() {
    const endpoint = 'http://localhost:8081';
    const app = new Express();
    app.use(logger('dev'));
    app.use('/asset', Express.static(path.resolve(__dirname, '../asset')));
    app.use('/p', proxy(endpoint, {
        forwardPath: (req) => {
            return `/p${url.parse(req.url).path}`;
        },
    }));

    app.get('/index', (req, res) => {
        const html = fs
            .readFileSync(`${__dirname}/../index.html`)
            .toString()
            .replace('<!-- JS_MODULE -->', `</script><script src="/dist/main.js"></script>`)
            .replace('<!-- CSS_MODULE -->', `<link href="/dist/style.css" rel="stylesheet">`);

        res.set('Content-Type', 'text/html');
        res.send(html);
    });

    return app;
}

createConsole().listen(9016);
