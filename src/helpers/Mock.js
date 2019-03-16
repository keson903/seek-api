import Advertisements from '../data/Advertisements';
import Customers from '../data/Customers';
import Rule from '../models/Rule';

function initAds() {
  Advertisements.create('classic', 'Classic Ad', 269.99);
  Advertisements.create('standout', 'Standout Ad', 322.99, 250, true);
  Advertisements.create('premium', 'Premium Ad', 394.99, 250, true, true);
}

function initCustomer() {

  Customers.create('DEFAULT',
    [],
    [
      'classic', 'standout', 'premium'
    ]);

  Customers.create('UNILEVER',
    [
      new Rule('classic').createGetXReplaceY(3, 2)
    ],
    [
      'classic', 'classic', 'classic', 'premium'
    ]);


  Customers.create('APPLE',
    [
      new Rule('standout').createDiscount(23)
    ],
    [
      'standout', 'standout', 'standout', 'premium'
    ]);

  Customers.create('NIKE',
    [
      new Rule('premium').createBundle(4, 15)
    ],
    [
      'premium', 'premium', 'premium', 'premium'
    ]);

  Customers.create('FORD', [
    new Rule('classic').createGetXReplaceY(5, 4),
    new Rule('standout').createDiscount(13),
    new Rule('premium').createBundle(3, 5),
  ],
    [
      'classic', 'classic', 'classic',
      'standout', 'standout', 'standout',
      'premium', 'premium', 'premium',
    ]);
}

function init() {
  initAds();
  initCustomer();
}

export default {
  init
}