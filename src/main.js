const { createServer } = require('http');

const server = createServer((req, res) => {
  res.write('Hello World!');
  res.end('End of the response!');
})

server.listen(3000, () => {
  console.log('Server is running on port 3000!!!🚀🚀🚀');
})