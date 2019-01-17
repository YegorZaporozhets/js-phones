import phones from '../../../phones/phones.js';
import PageItem from './phones-catalog-item.js';
import Component from './../component.js';

export default class PhonesCatalog extends Component {
    constructor(options) {
        super(options);
        this._render(phones);
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
    }

    _onPhoneClick (ev) {
        ev.preventDefault();
        const $target = ev.target.closest('[data-go-to]');

        if (!$target) {
            return;
        }

        const $element = $target.closest('[data-phone]');
        console.log($target,$element);
        const phoneId = $element.getAttribute('data-phone-id');

        this._openPhonePage({container: this.$elem.querySelector()})


    }

    _sortCatalog(sortType) {
        const sortedCatalog = phones.sort((phone1, phone2) => {
            let item1 = phone1[sortType];
            let item2 = phone2[sortType];

            if (item1 > item2) return 1;
            if (item1 < item2) return -1;

            return 0;
        });
        this._render(sortedCatalog)
    }

    _openPhonePage(options) {
        const $container = options.container;
        const id = options.id;
    }
}