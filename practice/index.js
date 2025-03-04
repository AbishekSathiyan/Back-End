const express = require("express");

const app = express();

app.listen(3001, () => {
    console.log("Server started on http://localhost:3001");
});

app.get("/", (req, res) => {
    res.send("Welcome! Try http://localhost:3001/name, http://localhost:3001/age, or http://localhost:3001/address");
});

app.get("/name", (req, res) => {
    res.send("I'm Abishek");
});

app.get("/age", (req, res) => {
    res.send("I'm just 22 years old");
});

app.get("/address", (req, res) => {
    res.send("I'm from Methalodai(South), Methalodai, Ramanathapuram");
});
