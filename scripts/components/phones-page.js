import phones from './../../phones/phones.js';
import PageItem from './phones-page-item.js';

export default class PhonesCatalog {
    constructor(options) {
        this.$elem = options.elem;
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

        alert((phoneId));


    }

    _sortByAlphabet() {
        let nameSortedPhones = phones.sort((a, b) => {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();

            if (nameA > nameB) return 1;
            if (nameA < nameB) return -1;

            return 0;
        });

        this._render(nameSortedPhones);
    }
}