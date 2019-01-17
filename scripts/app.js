import PhonesCatalog from './components/phones-catalog/phones-catalog.js';
import Sidebar from './components/sidebar/sidebar.js';
import Component from "./components/component.js";

export default class PhonesMarket extends Component {
    constructor(options) {
        super(options);
        this._createPhonesCatalog();
        this._createSidebar();
        this._initSidebar();
    }

    _createPhonesCatalog() {
        this._catalog = new PhonesCatalog({elem: this.$elem.querySelector('[data-page-catalog]')});
    }

    _createSidebar() {
        this._sidebar = new Sidebar({elem: this.$elem.querySelector('[data-page-sidebar]')});
    }

    _initSidebar() {
        this._sidebar._initSortPhonesSelector({catalog: this._catalog});
    }
}