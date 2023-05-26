const express = require("express");
const cors = require("cors");

const countInt = require("./algorithms/countInt.js");
const cumSum = require("./algorithms/cumSum.js");
const fibonacci = require("./algorithms/fibonacci.js");
const gcd = require("./algorithms/gcd.js");
const isPrime = require("./algorithms/isPrime.js");
const quickSort = require("./algorithms/quickSort.js");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Salve!");
});

app.post("/algorithms", (req, res) => {
  const { algorithm, value } = req.body;
  let result;
  switch (algorithm) {
    case "countint":
      result = countInt(value);
      break;
    case "cumsum":
      result = cumSum(value);
      break;
    case "fibonacci":
      result = fibonacci(value);
      break;
    case "gcd":
      result = gcd(value);
      break;
    case "isprime":
      result = isPrime(value);
      break;
    case "quicksort":
      result = quickSort(value);
      break;
    default:
      res.status(400).send("Algoritmo inválido.");
      return;
  }
  res.status(200).send({ result });
});

module.exports = app;
