import Advertisement from '../models/Advertisement';

class Advertisements {

  constructor() {
    this.advertisements = [];
  }

  create(id, name, price, maxLength, allowLogo, priority) {
    const newAds = new Advertisement({id, name, price, maxLength, allowLogo, priority});
    this.advertisements.push(newAds);
  }

  findOne(id) {
    return this.advertisements.find(ads => ads.id === id);
  }

  findAll() {
    return this.advertisements;
  }
}

export default new Advertisements();