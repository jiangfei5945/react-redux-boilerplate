import Express from 'express';
import path from 'path';
import logger from 'morgan';
import proxy from 'express-http-proxy';
import url from 'url';

import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';

const compiler = webpack(config);
const devMiddleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
});

function createConsole() {
    const endpoint = 'http://localhost:3000';
    const app = new Express();
    const indexPath = path.resolve(__dirname + '/../index.html');

    app.use(logger('dev'));
    app.use('/asset', Express.static(path.resolve(__dirname, '../asset')));
    app.use('/p', proxy(endpoint, {
        forwardPath: (req) => {
            return `/api${url.parse(req.url).path}`;
        },
    }));

    app.use(devMiddleware);

    app.get('/index', (req, res) => {
        res.sendFile(indexPath);
    });

    return app;
}

createConsole().listen(9016);
