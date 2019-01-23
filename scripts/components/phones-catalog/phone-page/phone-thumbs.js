import Component from "../../component.js";

export default class PhoneThumbs extends Component{
    constructor(options) {
        super(options);
        this.images = options.images;
        this.$picture = options.$picture;
        this._render();
        this._init();
    }

    _render() {
        const inner = this.images.map(img => `<li><img src="${img}"></li>`).join('');
        this.$elem.innerHTML = inner;
    }

    _init() {
        this.$elem.addEventListener('click', ev => {
            if (ev.target.nodeName === 'IMG') {
                const SRC = ev.target.getAttribute('src');
                this.$picture.setAttribute('src', SRC);
            }
        })
    }
}

