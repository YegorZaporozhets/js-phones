import phones from '../../../phones/phones.js';
import PageItem from './services/phones-catalog-item.js';
import Component from './../component.js';
import PhonePage from './services/phone-page.js';

export default class PhonesCatalog extends Component {
    constructor(options) {
        super(options);
        this.phones = phones;
        this._render(this.phones);
        this.$elem.addEventListener('click', ev => this._onPhoneClick(ev));
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

    _onPhoneClick (ev) {
        ev.preventDefault();
        const $target = ev.target.closest('[data-go-to]');

        if (!$target) {
            return;
        }

        const $element = $target.closest('[data-phone]');
        const phoneId = $element.getAttribute('data-phone-id');
        console.log(document.querySelector('[data-page-phone]'));
        this._openPhonePage({container: document.querySelector('[data-page-phone]'), id: phoneId});


    }

    renderSortedFilteredCatalog(phonesToRender) {
        this._render(phonesToRender)
    }

    _openPhonePage(options) {
        const $container = options.container;
        const id = options.id;
        this.hide();
        new PhonePage(options);
    }

    hide() {
        this.$elem.classList.add('hidden');
    }

    show() {
        this.$elem.classList.remove('hidden');
    }
}
