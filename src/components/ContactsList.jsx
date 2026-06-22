import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";
function ContactsList({ contacts, deletHandeler }) {
  console.log(contacts);
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deletHandeler={deletHandeler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No contacts yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
