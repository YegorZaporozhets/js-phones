import Component from './../component.js';

export default class SortPhones extends Component {
    constructor(options) {
        super(options);
        this._render();
    }

    _render() {
        this.$elem.innerHTML = `Sort by:
            <select>
              <option value="age">Newest</option>
              <option value="name">Alphabetical</option>
            </select>`;
    }

    _init(options) {
        const sidebarSortSelector = this.$elem.querySelector('select');
        const catalog = options.catalog;

        sidebarSortSelector.addEventListener('change', function () {
            switch (this.value) {
                case 'age':
                    catalog._sortCatalog(this.value);
                    break;
                case 'name':
                    catalog._sortCatalog(this.value);
                    break;
            }
        });
    }

}