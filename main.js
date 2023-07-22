const http = require('http');
const requestHandler = require('./requestHandler');

const server = http.createServer(requestHandler);

const PORT = 2000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});