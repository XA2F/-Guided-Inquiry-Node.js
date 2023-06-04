const express = require("express");
const app = express();
const port = 777;
const employeesData = [
  {
    employeeID: "B81F82BI76XO7MV1",
    Name: "Fredi Nangui",
    salary: "$99,501",
    "department name": "Analyst",
  },
  {
    employeeID: "B81F82BI76XO7MV2",
    Name: "Octave Nangui",
    salary: "$109,501",
    "department name": "Back-end dev",
  },
  {
    employeeID: "B81F82BI76XO7MV3",
    Name: "Paule Nangui",
    salary: "$89,501",
    "department name": "Front-end dev",
  },
  {
    employeeID: "B81F82BI76XO7MV4",
    Name: "Nadege Yapo Nangui",
    salary: "$120,501",
    "department name": "Architect",
  },
  {
    employeeID: "B81F82BI76XO7MV5",
    Name: "Blaise Nangui",
    salary: "$110,501",
    "department name": "Quality tester",
  },
  {
    employeeID: "B81F82BI76XO7MV6",
    Name: "David Nangui",
    salary: "$130,501",
    "department name": "UX designer",
  },
  {
    employeeID: "B81F82BI76XO7MV7",
    Name: "soleil Nangui",
    salary: "$121,501",
    "department name": "UI designer",
  },
  {
    employeeID: "B81F82BI76XO7MV8",
    Name: "victory Nangui",
    salary: "$150,501",
    "department name": "Dev-ops",
  },
  {
    employeeID: "B81F82BI76XO7MV9",
    Name: "Abana Nangui",
    salary: "$209,501",
    "department name": "Senior product Overseer",
  },
  {
    employeeID: "B81F82BI76XO7MV10",
    Name: "Abrielle Nangui",
    salary: "$20,501",
    "department name": "Intern",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome, employee data is reliant on specific domain name");
});

app.get("/api/employees", (req, res) => {
  res.send(employeesData);
});
app.get("api/employees/:id", (req, res) => {
  const employees = employeesData.find((i) => i.id === parseInt(req.params.id));
  if (!employees) {
    res.status(404).send("This employee was not found or has been retired.");
  } else {
    res.send(employees);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
