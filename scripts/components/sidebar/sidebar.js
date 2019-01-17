import Search from './sidebar-search.js';
import ShoppingCart from './sidebar-shopping-cart.js';
import SortPhones from './sidebar-sort.js';
import Component from "./../component.js";

export default class Sidebar extends Component{
    constructor(options) {
        super(options);

        this._render();
        this._createSerach();
        this._createSortPhonesSelector();
        this._createShoppingCart();
    }

    _render() {
        this.$elem.innerHTML = `<section>
          <p data-sidebar-search></p>
          <p data-sidebar-sort></p>
        </section>

        <section data-sidebar-shopping-cart></section>`
    }

    _createSerach() {
        this._search = new Search({elem: this.$elem.querySelector('[data-sidebar-search]')});

    }

    _createSortPhonesSelector() {
        this._sort = new SortPhones({elem: this.$elem.querySelector('[data-sidebar-sort]')});
    }

    _createShoppingCart() {
        this._shoppingCart = new ShoppingCart({elem: this.$elem.querySelector('[data-sidebar-shopping-cart]')});
    }

    _initSortPhonesSelector(options) {
        this._sort._init(options);
    }
}