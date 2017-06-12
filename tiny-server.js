const http = require('http');
const PORT = 1337;
const server = http.createServer();
const data = [
  'test 0',
  'test 1',
  'test 2',
  'test 3'
]
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
server.on('request', (req, res) => {
  console.log('url', req.url);
  if (req.url === '/data') {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end(data.join('\n'));
  } else {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('nothing to do here');
  }
})
