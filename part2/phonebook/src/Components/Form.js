import { useState } from "react";
import personService from "../services/persons";
import { v4 as uuidv4 } from "uuid";

function Form({ persons, setPersons, displayNotification }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (newName.length === 0 || newNumber.length === 0) {
      return alert(`Empty field`);
    }

    const duplicate = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());
    if (duplicate) {
      if (window.confirm(`${duplicate.name} is already added to phonebook. Replace the old number with the new one?`)) {
        updateEntry(duplicate);
        displayNotification({ message: `Updated ${duplicate.name}`, type: "success" });
      }
      return;
    }

    addNewEntry();
    displayNotification({ message: `Added ${newName}`, type: "success" });
  }

  function addNewEntry() {
    const newEntry = { name: newName, number: newNumber, id: uuidv4() };
    personService.create(newEntry).then((data) => {
      setPersons(persons.concat(data));
      setNewName("");
      setNewNumber("");
    });
  }

  function updateEntry(entry) {
    // update client view
    const updatedContact = { ...entry, number: newNumber };
    setPersons(
      persons.map((person) => {
        if (person.id === updatedContact.id) return updatedContact;
        return person;
      })
    );
    setNewName("");
    setNewNumber("");

    // update server
    personService.update(updatedContact.id, updatedContact).catch((error) => {
      displayNotification({
        message: `${updatedContact.name} has already been deleted. You cannot update a non-existing contact`,
        type: "error",
      });
    });
  }

  return (
    <>
      <h2>Add new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input type="tel" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}

export default Form;
