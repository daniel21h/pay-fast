const server = require('./config/custom-express')();

server.listen(3333, () => {
  console.log('Server running on port 3333.')
})
