import { observable, action, computed, toJS } from 'mobx'

let store = null;

class Store {

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable selectedTab = 0 ;


    @action
    onSelectTab = (index) => {
        this.selectedTab = index;
    }


}

export default function initStore(rootstore) {
    if (store === null) {
        store = new Store(rootstore);
        return store;
    }
    return store;
}