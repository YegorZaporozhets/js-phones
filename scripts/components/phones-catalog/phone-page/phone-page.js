import phone from '../../../../phones/1.js';
import PhoneThumbs from './phone-thumbs.js';

export default class PhonePage {
    constructor(options) {
        this.$container = options.container;
        this._id = options.id;
        this._render();
        this._init();
        this.catalog = options.catalog;
    }

    _render() {
        this.$container.innerHTML = `<div>
  <div>

    <img data-phone-current-img class="phone" src=${phone.images[0]}>

    <button data-btn-back >Back</button>
    <button data-btn-add >Add to basket</button>


    <h1>${phone.name}</h1>

    <p>${phone.description}</p>

    <ul data-phone-thumbs class="phone-thumbs"></ul>

    <ul class="specs">
      <li>
        <span>Availability and Networks</span>
        <dl>
          <dt>Availability</dt>
          <dd>${phone.availability}</dd>
        </dl>
      </li>
      <li>
        <span>Battery</span>
        <dl>
          <dt>Type</dt>
          <dd>${phone.battery.type}</dd>
          <dt>Talk Time</dt>
          <dd>${phone.battery.talkTime}</dd>
          <dt>Standby time (max)</dt>
          <dd>${phone.battery.standbyTime}</dd>
        </dl>
      </li>
      <li>
        <span>Storage and Memory</span>
        <dl>
          <dt>RAM</dt>
          <dd>${phone.storage.ram}</dd>
          <dt>Internal Storage</dt>
          <dd>${phone.storage.flash}</dd>
        </dl>
      </li>
      <li>
        <span>Connectivity</span>
        <dl>
          <dt>Network Support</dt>
          <dd></dd>
          <dt>WiFi</dt>
          <dd>${phone.connectivity.wifi}</dd>
          <dt>Bluetooth</dt>
          <dd>${phone.connectivity.bluetooth}</dd>
          <dt>Infrared</dt>
          <dd>${phone.connectivity.infrared}</dd>
          <dt>GPS</dt>
          <dd>${phone.connectivity.gps}</dd>
        </dl>
      </li>
      <li>
        <span>Android</span>
        <dl>
          <dt>OS Version</dt>
          <dd>${phone.android.os}</dd>
          <dt>UI</dt>
          <dd>${phone.android.ui}</dd>
        </dl>
      </li>
      <li>
        <span>Size and Weight</span>
        <dl>
          <dt>Dimensions</dt>
          ${phone.sizeAndWeight.dimensions.map(item => `<dd>item</dd>`).join('')}
          <dt>Weight</dt>
          <dd>${phone.sizeAndWeight.weight}</dd>
        </dl>
      </li>
      <li>
        <span>Display</span>
        <dl>
          <dt>Screen size</dt>
          <dd>${phone.display.screenSize}</dd>
          <dt>Screen resolution</dt>
          <dd>${phone.display.screenResolution}</dd>
          <dt>Touch screen</dt>
          <dd>${phone.display.touchScreen}</dd>
        </dl>
      </li>
      <li>
        <span>Hardware</span>
        <dl>
          <dt>CPU</dt>
          <dd>${phone.hardware.cpu}</dd>
          <dt>USB</dt>
          <dd>${phone.hardware.usb}</dd>
          <dt>Audio / headphone jack</dt>
          <dd>${phone.hardware.audioJack}</dd>
          <dt>FM Radio</dt>
          <dd>${phone.hardware.fmRadio}</dd>
          <dt>Accelerometer</dt>
          <dd>${phone.hardware.accelerometer}</dd>
        </dl>
      </li>
      <li>
        <span>Camera</span>
        <dl>
          <dt>Primary</dt>
          <dd>${phone.camera.primary}</dd>
          <dt>Features</dt>
          <dd>${phone.camera.features.join(', ')}</dd>
        </dl>
      </li>
      <li>
        <span>Additional Features</span>
        <dd>${phone.additionalFeatures}</dd>
      </li>
    </ul>
  </div>
</div>`;
    }

    _init() {
        new PhoneThumbs({elem: this.$container.querySelector('[data-phone-thumbs]'),
            images: phone.images,
            $picture: this.$container.querySelector('[data-phone-current-img]')});

        this.show();

        const $backBtn = this.$container.querySelector('[data-btn-back]');

        $backBtn.addEventListener('click', () => {
           this.hide();
           this.catalog.show();
        });

        const $addBtn = this.$container.querySelector('[data-btn-add]');

        $addBtn.addEventListener('click', () => {
            this.catalog.sidebar._shoppingCart.addPhoneInSC(this._id);
        })
    }

    hide() {
        this.$container.classList.add('hidden');
    }

    show() {
        this.$container.classList.remove('hidden');
    }
}
