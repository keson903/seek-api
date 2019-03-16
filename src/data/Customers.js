import Customer from '../models/Customer';
import Rule from '../models/Rule';

class Customers {

  constructor() {
    this.customers = [];
  }

  create(name, rules, adIds) {
    rules = rules || [];
    const newRules = rules.map(rule => new Rule(rule));
    const newCust = new Customer(name, newRules, adIds);
    this.customers.push(newCust);
  }

  total(name, rules, adIds) {
    rules = rules || [];
    const newRules = rules.map(rule => new Rule(rule));
    const cust = new Customer(name, newRules, adIds);
    return cust.total();
  }

  findOne(id) {
    id = `${id}`.toLowerCase();
    return this.customers.find(cust => cust.id === id);
  }

  findAll() {
    return this.customers.map(cust => {
      cust.totalAmount = cust.total();
      return cust;
    });
  }
}

export default new Customers();