import { useSelector, useDispatch } from 'react-redux';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter, getFilteredContacts } from 'redux/filter/filter-selectors';
import { addContact, deleteContact } from 'redux/contacts/contacts-actions';
import { setFilter } from 'redux/filter/filter-actions';

const ContactsPage = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const isDublicate = (name, number) => {
    const normalizedName = name.toLowerCase();
    const dublicate = contacts.find(item => {
      return (
        item.name.toLowerCase() === normalizedName &&
        item.number.toLowerCase() === number
      );
    });

    return Boolean(dublicate);
  };

  const onAddContact = ({ name, number }) => {
    if (isDublicate(name, number)) {
      alert(`${name} ${number} is already exist`);
      return;
    }
    const action = addContact({ name, number });
    dispatch(action);
  };

  const onDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const onFilterChange = event => {
    const action = setFilter(event.target.value);
    dispatch(action);
  };

  return (
    <>
      <h1 style={{ padding: 20 }}>Phonebook</h1>
      <Form onSubmit={onAddContact} />
      <h2 style={{ padding: 20 }}>Contacts</h2>
      <Filter filter={filter} onChange={onFilterChange} />
      <Contacts contacts={filteredContacts} onDeleteContact={onDeleteContact} />
    </>
  );
};

export default ContactsPage;
