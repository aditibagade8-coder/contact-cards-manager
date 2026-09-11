import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const addContact = (contact) => {
    setContacts([
      ...contacts,
      {
        ...contact,
        id: Date.now(),
      },
    ]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()) ||
    contact.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Contact Cards Manager</h1>

      <ContactForm addContact={addContact} />

      <input
        type="text"
        className="search-box"
        placeholder="Search by name or company"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ContactList contacts={filteredContacts} />
    </div>
  );
}
export default App;