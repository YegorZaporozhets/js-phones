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

            let shoppingCartInner = this._shoppingCart
                .map(phone => `<li data-phone-id="${phone.id}">
                    ${phone.name}<span class="sc-item-delete" data-delete> [X]</span><span>${defineQuantity(phone.quantity)}</span>
                  </li>`)
                .join('');
            this.$elem.innerHTML = `<p>Shopping Cart</p>
          <ul>
            ${shoppingCartInner}
          </ul>`
        }

        function defineQuantity(quantity) {
            if (quantity === 1) return '';
            return ` x${quantity}`;
        }
    }

    addPhoneInSC(id) {
        let currentPhone = this.catalog.phones.filter((phone) => phone.id === id)[0];
        let currentPhoneInSC = this._shoppingCart.find(item => item.id === currentPhone.id);

        if (currentPhoneInSC) {
            currentPhoneInSC.quantity++;
        } else {
            currentPhone.quantity = 1;
            this._shoppingCart.push(currentPhone);
        }

        this._render();

    }

    removePhoneFromSC(id) {
        let deleteCount = this._shoppingCart.findIndex(item => item.id === id);
        let phone = this._shoppingCart[deleteCount];

        if (phone.quantity === 1) {
            this._shoppingCart.splice(deleteCount, 1);
        } else {
            phone.quantity--;
        }

        this._render();
    }

    init(options) {
        this.catalog = options.catalog;
        this.$elem.addEventListener('click', ev => {
            let $target = ev.target;

            if ($target.hasAttribute('data-delete')) {
                let id = $target
                    .closest('[data-phone-id]')
                    .getAttribute('data-phone-id');

                this.removePhoneFromSC(id);
            }
        });
    }
}
