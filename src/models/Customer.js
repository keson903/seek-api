import uuidv4 from 'uuid/v4';
import moment from 'moment';
import Advertisements from '../data/Advertisements'
import AppMath from '../helpers/Math';

class Customer {

  constructor(name, rules, adIds) {
    this.id = `${name}`.toLowerCase() || uuidv4();
    this.name = name || '';
    this.rules = rules || [];
    this.adIds = adIds || [];
    this.createdAt = moment().toJSON();
    this.modifiedAt = moment().toJSON();
  }

  addRule(rule) {
    this.rules.push(rule);
  }

  addAds(id) {
    this.adIds.push(id);
  }

  total() {
    const rules = this.rules || [];
    if (!rules.length) {
      return this.sumAllAds();
    }
    return this.sumAllAdsWithRules();
  }

  getAdsMap() {
    const ads = this.adIds || [];
    if (!ads.length) {
      return {};
    }

    let adsMap = {};
    ads.forEach(ad => {
      adsMap[ad.id] = (adsMap[ad.id] || 0) + 1;
    });
    return adsMap;
  }

  getAdsMap() {
    const ids = this.adIds || [];
    if (!ids.length) {
      return {};
    }

    const adsMap = {};
    ids.forEach(id => {
      adsMap[id] = adsMap[id] || {
        item: Advertisements.findOne(id),
        count: 0
      };

      adsMap[id].count = adsMap[id].count + 1;
    });

    return adsMap;
  }

  sumAllAds() {
    const adsMap = this.getAdsMap();
    const total = Object.values(adsMap).reduce((value, ad) => (ad.item.price * ad.count) + value, 0);
    return AppMath.round(total, 2);
  }

  sumAllAdsWithRules() {
    const adsMap = this.getAdsMap();
    const ads = Object.values(adsMap);
    const rules = this.rules || [];

    const totalAmount = ads.reduce((total, ad) => {
      const {item, count} = ad;
      const {price} = item;

      const amount = rules.reduce((value, rule) => this.sumAllRules(rule, item, count) + value, 0);

      return total + (amount || (price * count));
    }, 0);

    return AppMath.round(totalAmount, 2);
  }

  sumAllRules() {
    return this.calcGetXReplaceY(...arguments) +
      this.calcDiscount(...arguments) +
      this.calcBundle(...arguments);
  }

  calcGetXReplaceY(rule, ad, count) {
    const {deal, ads} = rule;
    const {id, price} = ad;

    if (!deal || ads !== id) {
      return 0;
    }

    const {get, replace} = deal;
    const bundle = Math.floor(count / get);
    const remain = count - (bundle * get);
    const newBundle = replace * bundle;
    return (remain + newBundle) * price;
  }

  calcDiscount(rule, ad, count) {
    const {discount, ads} = rule;
    const {id, price} = ad;

    if (!discount || ads !== id) {
      return 0;
    }

    return (price - discount) * count;
  }

  calcBundle(rule, ad, count) {
    const {bundle, ads} = rule;
    const {id, price} = ad;

    if (!bundle || ads !== id) {
      return 0;
    }

    const {qty, discount} = bundle;
    if (qty < count) {
      return 0;
    }

    return (price - discount) * count;
  }
}

export default Customer;