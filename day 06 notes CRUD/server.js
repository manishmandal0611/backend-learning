require('dotenv').config();
const app = require('./src/app');
const http = require('http');

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});