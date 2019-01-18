import PhonesCatalog from './components/phones-catalog/phones-catalog.js';
import Sidebar from './components/sidebar/sidebar.js';
import Component from "./components/component.js";

export default class PhonesMarket extends Component {
    constructor(options) {
        super(options);
        this._createMarkup();
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
        this._sidebar.init({catalog: this._catalog});
    }

    _createMarkup() {
        this.$elem.innerHTML = `<div class="row">
      <!--Sidebar-->
      <div data-page-sidebar class="col-md-2"></div>
      <!--Main content-->
      <div data-page-catalog class="col-md-10"></div>
      <!--Phone page-->
      <div data-page-phone class="col-md-10"></div>
    </div>`;
    }
}