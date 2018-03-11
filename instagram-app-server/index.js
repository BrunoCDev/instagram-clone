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

app.post("/api/users/login", uc.login);
app.post("/api/users/create", uc.createAccount);
app.get("/api/users/check/:username", uc.checkUsername);
app.post("/api/users/username/create", uc.createUsername);
app.post("/api/users/username/update", uc.updateUsername);

app.listen(port, function() {
  console.log("Server listening on port", port);
});
