import {store} from './store';
import {saveState} from "./localStorageState";
import throttle from "lodash/throttle";

export const configureStore = () => {
    store.subscribe(throttle(() => {
        saveState(store.getState());
    }, 1000));

    return store;
};