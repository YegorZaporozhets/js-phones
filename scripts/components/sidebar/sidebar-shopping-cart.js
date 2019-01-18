import Component from './../component.js';

export default class ShoppingCart extends Component {
    constructor(options) {
        super(options);
        this._shoppingCart = [];
        this._render();
    }

    _render() {
        if(!this._shoppingCart || this._shoppingCart.length === 0) {
            this.$elem.innerHTML = `<p>Shopping Cart</p>
          <ul>
            Empty ;(
          </ul>`;
        } else {

            let shoppingCartInner = this._shoppingCart.map(phone => `<li data-phone-id="${phone.id}">${phone.name}</li>`);
            this.$elem.innerHTML = `<p>Shopping Cart</p>
          <ul>
            ${shoppingCartInner}
          </ul>`
        }
    }

    addPhoneInSC(id) {
        let currentPhone = this.catalog.phones.filter((phone) => phone.id === id)[0];
        this._shoppingCart.push(currentPhone);
        this._render();

    }

    removePhoneFromSC(id) {
        let deleteCount = this._shoppingCart.findIndex(item => item.id === id);
        this._shoppingCart.splice(deleteCount, 1);
        this._render();
    }

    init(options) {
        this.catalog = options.catalog;
    }
}