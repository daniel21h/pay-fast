const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
  const server = express();

  // Body parser
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  // Files manager
  consign()
    .include('src/controllers')
    .into(server);

  return server;
}