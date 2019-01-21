import Component from "./../component.js";

export default class Search extends Component {
    constructor(options) {
        super(options);
        this._render();
        this.$input = this.$elem.querySelector('input');
    }

    _render() {
        this.$elem.innerHTML = `            Search:
            <input>`;
    }

    init(options) {
        const catalog = options.catalog;
        this.$input.addEventListener('input', function() {
           const filteredPhones = catalog.phones.filter((item, i, arr) => {
               let serachValue = this.value.toLowerCase();
               let phoneName = item.name.toLowerCase();

               return phoneName.indexOf(serachValue) + 1;
           });

           catalog.renderSortedFilteredCatalog(filteredPhones);
           catalog.renderedPhones = filteredPhones;
        });
    }

}
