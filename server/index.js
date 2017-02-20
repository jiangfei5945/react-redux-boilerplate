import Express from 'express';
import path from 'path';
import logger from 'morgan';
import proxy from 'express-http-proxy';
import url from 'url';

function createConsole() {
    const endpoint = 'http://localhost:8081';
    const app = new Express();
    const indexPath = path.resolve(__dirname + '/../index.html');
    
    app.use(logger('dev'));
    app.use('/asset', Express.static(path.resolve(__dirname, '../asset')));
    app.use('/p', proxy(endpoint, {
        forwardPath: (req) => {
            return `/p${url.parse(req.url).path}`;
        },
    }));

    app.get('/index', (req, res) => {
        res.sendFile(indexPath);
    });

    return app;
}

createConsole().listen(9016);
