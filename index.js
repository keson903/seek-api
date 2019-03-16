import server from "./server";
import mock from "./src/helpers/Mock";
import express from 'express';


const PORT = 3001;
const HOST = '0.0.0.0';

server.use('/', express.static('public'))

mock.init();

server.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);