import PropTypes from 'prop-types';
import styles from './contacts.module.css';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul className={styles.list}>
        {contacts.map(contact => {
          return (
            <li className={styles.item} key={contact.id}>
              <p className={styles.itemName}>
                {contact.name}: <span>{contact.number}</span>
              </p>
              <button
                onClick={() => onDeleteContact(contact.id)}
                type="button"
                className={styles.btn}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;

Contacts.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
