import axios from "axios";
const baseUrl = "/api/persons";

function getAll() {
  return axios.get(`${baseUrl}`).then((response) => response.data);
}

function create(newItem) {
  return axios.post(`${baseUrl}`, newItem).then((response) => response.data);
}

function remove(id) {
  return axios.delete(`${baseUrl}/${id}`);
}

function update(id, update) {
  return axios.put(`${baseUrl}/${id}`, update);
}

const personService = { getAll, create, remove, update };
export default personService;
