const http = require('http');
const PORT = 1337;
const server = http.createServer();
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
server.on('request', (request, response) => {
  console.log('I heard that!');
})
