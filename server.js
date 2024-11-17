//- `GET /` sends the string `"Hello employees!"`
//- `GET /employees` sends the array of employees
//- `GET /employees/:id` sends the employee with the given `id`.
  //- This should 404 with a message if there is no employee with that id.
// `GET /employees/random` sends a random employee from the array.
const express = require('express');
const app = express();
const employees = require('./employees.js'); 


app.get('/', (req, res) => {
  res.send('Hello employees!');
});


app.get('/employees', (req, res) => {
  res.send(employees); 
});


app.get('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find(emp => emp.id === id);

  if (employee) {
    res.send(employee);
  } else {
    res.status(404).send('No Employee Found'); 
  }
});


app.get('/employees/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
