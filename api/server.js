const express = require("express");
const customersRouter = require("../data/customers/customers-router");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use("/customers", customersRouter);

module.exports = server;
