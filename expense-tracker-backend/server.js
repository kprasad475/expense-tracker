const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

let expenses = [
  { id: "1", description: "Grocery", amount: 50, date: "2024-07-01" },
  { id: "2", description: "Rent", amount: 500, date: "2024-07-01" }
];

app.get('/expenses', (req, res) => {
  res.json(expenses);
});

app.post('/expenses', (req, res) => {
  const expense = req.body;
  expense.id = (expenses.length + 1).toString();
  expenses.push(expense);
  res.status(201).json(expense);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
