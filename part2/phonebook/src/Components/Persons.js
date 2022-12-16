import personService from "../services/persons";

function Persons({ persons, setPersons, filter }) {
  const filteredList = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));

  function removeEntry(entry) {
    if (window.confirm(`Delete ${entry.name}?`)) {
      // update client view
      setPersons(persons.filter((person) => person.id !== entry.id));
      // update server
      personService.remove(entry.id);
    }
  }

  return (
    <>
      <h2>Persons</h2>
      <ul>
        {filteredList.map((person) => (
          <li key={person.id}>
            {person.name} {person.number} <button onClick={() => removeEntry(person)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Persons;
