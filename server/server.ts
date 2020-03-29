import http from 'http';
import serveHandler from 'serve-handler';

const CONFIG = require('../config/envSettings');

const SERVER_PORT = 3000;
const PUBLIC_PATH = 'dist';

import express from 'express';
const app = express();
const server = http.createServer(app);

// Setup API
import apiRouter from './api';
app.use('/api', apiRouter());

// By default serve static assets
app.use((request: http.IncomingMessage, response: http.ServerResponse) => {
    return serveHandler(request, response, {
        public: PUBLIC_PATH,
        rewrites: [
            // Treat as single-page app
            {'source': '/**', 'destination': '/index.html'}
        ]
    });
})

server.listen(SERVER_PORT, () => {
    console.log(`WEB SERVER: Running on [http://localhost:${SERVER_PORT}/]`);
});
