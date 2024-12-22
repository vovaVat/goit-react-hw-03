import { useEffect, useState } from "react";
import ContactList from "./components/ContactList";
import SearchForm from "./components/SearchBox";
import ContactForm from "./components/ContactForm";
import { nanoid } from "nanoid";

const initalContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contactsList, setContactsList] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initalContacts;
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contactsList));
  }, [contactsList]);

  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    setContactsList(
      contactsList.filter((elem) => {
        return elem.id !== id;
      })
    );
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (values, actions) => {
    setContactsList([
      ...contactsList,
      { id: nanoid(), name: values.name, number: values.number },
    ]);
    actions.resetForm();
  };

  const filteredContacts = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm submit={handleSubmit} />
      <SearchForm value={search} onChange={handleSearchChange} />
      <ContactList list={filteredContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
