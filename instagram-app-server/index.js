require("now-env");
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const port = 3005;
const app = express();
//, config = require('./config')
//, session = require('express-session')
// , massive = require('massive')
// require('dotenv').config()

// massive(process.env.CONNECTION_STRING).then(db => app.set('db', db)).catch(console.log)

// app.use(session(config.session) );
app.use(cors());
app.use(json());
app.listen(port, function() {
  console.log("Server listening on port", port);
});
