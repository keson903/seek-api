import {expect} from "chai"
import Mock from '../src/helpers/Mock';
import Customers from '../src/data/Customers';

describe("All customer should get correct total", () => {
  beforeEach(() => {
    Mock.init();
  });

  it("default should be charged $987.97", () => {
    const customer = Customers.findOne('DEFAULT');
    expect(customer.total()).to.equal(987.97)
  });

  it("Unilever should be charged $934.97", () => {
    const customer = Customers.findOne('UNILEVER');
    expect(customer.total()).to.equal(934.97)
  });

  it("Apple should be charged $1294.96", () => {
    const customer = Customers.findOne('APPLE');
    expect(customer.total()).to.equal(1294.96);
  });

  it("NIKE should be charged $1519.96", () => {
    const customer = Customers.findOne('NIKE');
    expect(customer.total()).to.equal(1519.96);
  });

  it("FORD should be charged $2909.91", () => {
    const customer = Customers.findOne('FORD');
    expect(customer.total()).to.equal(2909.91);
  });
})