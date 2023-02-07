const express = require('express');
const next = require('next');

const port = 3000;
const app = next({ dev: true });

const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.listen(3000, (error) => {
        if (error) throw error;

        server.get('/', (request, response) => {
            return app.render(request, response, '/');
        });

        server.get('*', (request, response) => {
            return handle(request, response);
        });

        console.log(`Ready on http://localhost:${port}`);
    });
});
