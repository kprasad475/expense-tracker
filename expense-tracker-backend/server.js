const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

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
app.put('/expenses/:id', (req, res) => {
  const { id } = req.params;
  const updatedExpense = req.body;
  const index = expenses.findIndex(exp => exp.id === id);

  if (index !== -1) {
    expenses[index] = { ...expenses[index], ...updatedExpense };
    res.json(expenses[index]);
  } else {
    res.status(404).send('Expense not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
