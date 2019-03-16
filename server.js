
import express from "express";
import HttpResponse from "./src/helpers/HttpResponse";
import cors from "cors";
import Customers from "./src/data/Customers";
import Advertisements from "./src/data/Advertisements";
import Customer from "./src/models/Customer";
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json())


app.get('/api/customers', (req, res) => {
  const http = new HttpResponse(res);
  return http.Ok(Customers.findAll())
});

app.post('/api/customer', (req, res) => {
  const {name, rules, adIds} = req.body;
  Customers.create(name, rules, adIds);

  const http = new HttpResponse(res);
  return http.Created();
});

app.post('/api/customer/total', (req, res) => {
  const {name, rules, adIds} = req.body;
  const total = new Customer(name, rules, adIds).total();

  const http = new HttpResponse(res);
  return http.Ok({total})
});

app.get('/api/ads', (req, res) => {
  const http = new HttpResponse(res);
  return http.Ok(Advertisements.findAll())
});

export default app;