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

                const sortedPhones = catalog.renderedPhones.sort((phone1, phone2) => {
                    let item1 = phone1[this.value];
                    let item2 = phone2[this.value];

                    if (item1 > item2) return 1;
                    if (item1 < item2) return -1;

                    return 0;
                });

                catalog.renderSortedFilteredCatalog(sortedPhones);
        });
    }

}
