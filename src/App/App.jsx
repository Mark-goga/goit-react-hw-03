// import ContactForm from '../ContactForm/ContactForm'
import SearchBox from "../SearchBox/SearchBox"
import ContactList from '../ContactList/ContactList'
import inishialContacs from '../Contacts.json'
import { useState } from 'react'

export default function App() {
    const [contacts, setContacts] = useState(inishialContacs);
    const [filter, setFilter] = useState("");
    const onDelete = (idContact) => {
        setContacts(() => {
            return contacts.filter((contact) => contact.id !== idContact)
        })
    }
    const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={filterContacts} onDelete={onDelete} />
      </div>
    );
}