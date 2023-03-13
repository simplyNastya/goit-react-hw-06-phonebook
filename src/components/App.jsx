import ContactsPage from './ContactsPage/ContactsPage';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ContactsPage />;
      </PersistGate>
    </Provider>
  );
};
