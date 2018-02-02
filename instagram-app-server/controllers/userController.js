const bcrypt = require("bcryptjs");

const login = (req, res, next) => {
  const db = req.app.get("db");
  const { email, password } = req.body;
  db
    .login([email, password])
    .then(response => res.json(response[0]))
    .catch(console.log);
};

module.exports = {
  login
};
