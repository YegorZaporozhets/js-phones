export default class PageItem {
    constructor(phone) {
        this._phone = phone;
    }

    getPhoneRender() {
        return `<li data-phone data-phone-id='${this._phone.id}' class="thumbnail">
            <a data-go-to href="#!/phones/${this._phone.id}" class="thumb">
              <img alt="${this._phone.name}" src="${this._phone.imageUrl}">
            </a>

            <div data-add class="phones__btn-buy-wrapper">
              <a class="btn btn-success">
                Add
              </a>
            </div>

            <a data-go-to href="#!/phones/${this._phone.id}">${this._phone.name}</a>
            <p>${this._phone.snippet}</p>
          </li>`
    }
}
