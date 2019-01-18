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

    init(options) {
        const sidebarSortSelector = this.$elem.querySelector('select');
        const catalog = options.catalog;

        sidebarSortSelector.addEventListener('change', function () {
            function sortPhones(sortType) {
                const sortedPhones = catalog.phones.sort((phone1, phone2) => {
                    let item1 = phone1[sortType];
                    let item2 = phone2[sortType];

                    if (item1 > item2) return 1;
                    if (item1 < item2) return -1;

                    return 0;
                });
                catalog.renderSortedCatalog(sortedPhones);
            }

            switch (this.value) {
                case 'age':
                    sortPhones(this.value);
                    break;
                case 'name':
                    sortPhones(this.value);
                    break;
            }
        });
    }

}