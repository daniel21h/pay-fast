const express = require('express');
const consign = require('consign');

module.exports = () => {
  const server = express();

  // Files manager
  consign()
    .include('src/controllers')
    .into(server);

  return server;
}