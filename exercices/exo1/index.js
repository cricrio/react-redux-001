const { data } = require('./data.json');

// Exercise 1: Create a function to find a person by id
function findById(data, id) {
  return data.find((p) => p.id == id);
}

// Exercise 2: Create a function to filter people by their name

function filterByName(data, name) {
  return data.filter((p) => p.name.startsWith(name));
}
