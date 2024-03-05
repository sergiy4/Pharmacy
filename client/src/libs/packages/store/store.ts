import { Store } from './store.package.js';

const store = new Store();

type RootState = ReturnType<typeof store.instance.getState>;

export { store, type RootState };
