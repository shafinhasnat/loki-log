const http = require('http');
const server = http.createServer(
    async (req, res) => {
        if (req.url === '/home' && req.method === 'GET') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            // res.write('Shafin');
            console.log('[GET 200]=>', '/home')
            res.end();
        }
    }
);
const PORT = 1904;
server.listen(PORT, () => console.log('Server running on PORT', PORT));