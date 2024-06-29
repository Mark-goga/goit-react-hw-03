import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import inishialContacs from "../../Contacts.json";
import { useState, useEffect } from "react";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const localContacts = localStorage.getItem("localStrContact");
    if (localContacts) {
      return JSON.parse(localContacts);
    }
    return inishialContacs;
  });
  const [filter, setFilter] = useState("");

  const onDelete = (idContact) => {
    setContacts(() => {
      return contacts.filter((contact) => contact.id !== idContact);
    });
  };
  function addContact(newContact) {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  }
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  useEffect(() => {
    localStorage.setItem("localStrContact", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm submitForm={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContacts} onDelete={onDelete} />
    </div>
  );
}
