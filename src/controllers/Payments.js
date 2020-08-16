module.exports = (server) => {
  server.get('/payments', (request, response) => {
    response.json({ message: 'Alura Node.js' })
  });

  server.post('/payments/payment', (request, response) => {
    const payment = request.body;
    console.log(payment);

    response.send('Ok');
  });
}
