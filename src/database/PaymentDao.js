function paymentDao(connection) {
  this._connection = connection;
}

paymentDao.prototype.save = (payment, callback) => {
  this._connection.query('INSERT INTO payments SET ?', payment, callback);
}

paymentDao.prototype.list = (callback) => {
  this._connection.query('select * from payments', callback);
}

paymentDao.prototype.searchById = (callback) => {
  this._connection.query('select * from payments where id = ?', [id], callback);
}