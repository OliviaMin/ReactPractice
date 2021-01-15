const hostname = '127.0.0.1';
const fs = require('fs');
const http = require('http')

const port = 3000;
fs.readFile('home.html', (err, html) => {
    if (err) {
        throw err;
    }
    const server = http.createServer((request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-type', 'html');
        response.write(html);
        response.end();
    });

    server.listen(port, hostname, () => {
        console.log('Server started on port' + port);
    });
})

