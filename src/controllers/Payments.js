module.exports = (server) => {
  server.get('/payments', (request, response) => {
    response.json({ message: 'Alura Node.js' })
  })
}
