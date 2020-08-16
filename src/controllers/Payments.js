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

    // Connection with DB
    const connection = server.database.connectionFactory();
    const paymentDao = server.database.PaymentDao(connection);

    paymentDao.save(payment, (error, result) => {
      console.log('payment created');

      response.json(payment);
    })

    response.send(payment);
  });
}
