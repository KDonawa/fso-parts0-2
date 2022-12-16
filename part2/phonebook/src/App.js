import { useState, useEffect } from "react";
import SearchFilter from "./components/SearchFilter";
import Form from "./components/Form";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personService.getAll().then((data) => {
      setPersons(data);
    });
  }, []);

  function displayNotification(notification, timeoutSeconds = 5) {
    setNotification(notification);
    setTimeout(() => {
      setNotification(null);
    }, timeoutSeconds * 1000);
  }

  return (
    <div>
      <h1>Phonebook</h1>
      {notification && <Notification notification={notification} />}
      <SearchFilter value={filter} onChange={(e) => setFilter(e.target.value)} />
      <Form persons={persons} setPersons={setPersons} displayNotification={displayNotification} />
      <Persons persons={persons} setPersons={setPersons} filter={filter} />
    </div>
  );
}

export default App;
