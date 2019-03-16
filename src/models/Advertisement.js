class Advertisement {

  constructor(data) {
    const {id, name, price, maxLength, allowLogo, priority} = data;

    this.id = id || '';
    this.name = name || '';
    this.price = price || 0;
    this.maxLength = maxLength || 50;
    this.allowLogo = !!allowLogo;
    this.priority = !!priority;
  }
}

export default Advertisement;