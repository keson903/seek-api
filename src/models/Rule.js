class Rule {

  constructor(params) {
    if (typeof params === "string") {
      this.ads = params;
    } else {
      const {ads, deal, discount, bundle} = params;
      this.ads = ads;
      this.deal = deal;
      this.discount = discount;
      this.bundle = bundle;
    }
  }

  createGetXReplaceY(get, replace) {
    this.deal = {get, replace};
    return this;
  }

  createDiscount(discount) {
    this.discount = discount;
    return this;
  }

  createBundle(qty, discount) {
    this.bundle = {qty, discount};
    return this;
  }
}

export default Rule;