module.exports = (server) => {
  server.get('/payments', (request, response) => {
    response.json({ message: 'Alura with Node.js' })
  });

  server.post('/payments/payment', (request, response) => {
    const payment = request.body;
    console.log('Processing the request for a new payment.');

    // Set payment datas
    payment.status = 'created';
    payment.date = new Date;

    response.send(payment);
  });
}
