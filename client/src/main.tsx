import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './libs/packages/store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store.instance}>
    <PersistGate persistor={store.persistor}>
      <App />
    </PersistGate>
  </Provider>
);
