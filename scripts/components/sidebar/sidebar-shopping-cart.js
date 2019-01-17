import Component from './../component.js';

export default class ShoppingCart extends Component {
    constructor(options) {
        super(options);
        this._render();
    }

    _render() {
        this.$elem.innerHTML = `          <p>Shopping Cart</p>
          <ul>
            <li>Phone 1</li>
            <li>Phone 2</li>
            <li>Phone 3</li>
          </ul>`;
    }
}