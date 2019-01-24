import phones from '../../../phones/phones.js';
import PageItem from './services/phones-catalog-item.js';
import Component from './../component.js';
import PhonePage from './phone-page/phone-page.js';

export default class PhonesCatalog extends Component {
    constructor(options) {
        super(options);
        this.phones = phones;
        this._render(this.phones);
    }

    _render(phonesToRender) {
        let inner = `<ul class="phones">
          ${phonesToRender.map(item => {
              const phone = new PageItem(item);
              return phone.getPhoneRender();
        }).join('')}
        </ul>`;

        this.$elem.innerHTML = inner;
        this.renderedPhones = phonesToRender;
    }

    init(options) {
        this.sidebar = options.sidebar;
        this.$elem.addEventListener('click', ev => this._onPhoneClick(ev));
        this.$elem.addEventListener('click', ev => this.addPhoneInSC(ev));
    }

    _onPhoneClick (ev) {
        ev.preventDefault();
        const $target = ev.target.closest('[data-go-to]');

        if (!$target) {
            return;
        }

        const $element = $target.closest('[data-phone]');
        const phoneId = $element.getAttribute('data-phone-id');
        this._openPhonePage({container: document.querySelector('[data-page-phone]'), id: phoneId, catalog: this});


    }

    renderSortedFilteredCatalog(phonesToRender) {
        this._render(phonesToRender)
    }

    _openPhonePage(options) {
        this.hide();
        new PhonePage(options);
    }

    hide() {
        this.$elem.classList.add('hidden');
    }

    show() {
        this.$elem.classList.remove('hidden');
    }

    addPhoneInSC(ev) {
        let $target = ev.target.closest('[data-add]');

        if ($target) {
            let id = $target.closest('[data-phone-id]').getAttribute('data-phone-id');
            this.sidebar._shoppingCart.addPhoneInSC(id);
        }
    }
}
