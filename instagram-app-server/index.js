require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const app = express();
const massive = require("massive");
const { PORT, CONNECTION_STRING } = process.env;
const port = PORT || 3005;

const uc = require("./controllers/userController");

massive(CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log("Error connecting to database: ", err));

app.use(cors());
app.use(json());

app.post("/api/login", uc.login);

app.listen(port, function() {
  console.log("Server listening on port", port);
});
