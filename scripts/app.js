import PhonesCatalog from './components/phones-page.js';

const phoneCatalog = new PhonesCatalog({elem: document.querySelector('[data-page-container]')});

phoneCatalog._sortByAlphabet(); // Test sorting