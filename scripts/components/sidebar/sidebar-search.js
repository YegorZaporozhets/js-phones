import Component from "./../component.js";

export default class Search extends Component {
    constructor(options) {
        super(options);
        this._render();
    }

    _render() {
        this.$elem.innerHTML = `            Search:
            <input>`;
    }

}