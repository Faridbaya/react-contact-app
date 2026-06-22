import { useState } from "react";

import styles from "./Contact.module.css";
import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";
import { v4 } from "uuid";

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");

  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "", 
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    // const { name, email } = contact;
    const name = event.target.name;
    const value = event.target.value;
    console.log({ name, value });

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.email ||
      !contact.lastName ||
      !contact.name ||
      !contact.phone
    ) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    const newConatct = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newConatct]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  const deletHandeler = (id) => {
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContacts);
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeplaceholder}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}

        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>

      <ContactsList contacts={contacts} deletHandeler={deletHandeler} />
    </div>
  );
}

export default Contact;
