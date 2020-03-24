const express = require("express");
const app = express();
const PORT = 5000;

const people = ["Scott", "Myron", "Rachael", "Derrick"];

app.use(express.static("server/public"));

app.get("/people", (req, res) => {
  res.send(people);
});

app.get("/firstperson", (req, res) => {
  res.send(people[0]);
});

app.get("/numofpeople", (req, res) => {
  const responseObject = {
    numOfPeople: people.length,
  };
  res.send(responseObject);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
