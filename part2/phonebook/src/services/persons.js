import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

function getAll() {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
}

function create(newItem) {
  const request = axios.post(baseUrl, newItem);
  return request.then((response) => response.data);
}

function remove(id) {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request;
}

function update(id, update) {
  const request = axios.put(`${baseUrl}/${id}`, update);
  return request;
}

const personService = { getAll, create, remove, update };
export default personService;
