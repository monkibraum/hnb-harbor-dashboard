import initUiStore from './uistore'
import initAStore from './astore';
import initBStore from './bstore';
import initCStore from './cstore';

let store = null;

class Store {

  constructor() {
    this.UiStore = initUiStore(this);
    this.AStore = initAStore(this);
    this.BStore = initBStore(this);
    this.CStore = initCStore(this);
  }

}

export default function initStore(rootstore) {
  if (store === null) {
    store = new Store(rootstore);
    return store;
  }
  return store;
}