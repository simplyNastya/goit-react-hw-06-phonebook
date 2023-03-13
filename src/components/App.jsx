import ContactsPage from './ContactsPage/ContactsPage';
import store from 'redux/store';
import { Provider } from 'react-redux';

export const App = () => {
  return (
    <Provider store={store}>
      <ContactsPage />;
    </Provider>
  );
};
