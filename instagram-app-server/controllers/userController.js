const bcrypt = require("bcryptjs");

const login = (req, res, next) => {
  const db = req.app.get("db");
  const { email, password } = req.body;
  db
    .login([email])
    .then(response => {
      bcrypt.compare(password, response[0].password, function(err, confirm) {
        res.json(response[0]);
      });
    })
    .catch(() => res.json(false));
};

const createAccount = (req, res, next) => {
  const db = req.app.get("db");
  const { fullName, password, email } = req.body;
  let username = email.split("@");
  username = username[0].toUpperCase();
  bcrypt.hash(password, parseInt(process.env.SALT, 10), function(err, hash) {
    db
      .createAccount([fullName, hash, email, username])
      .then(response => {
        res.json(response[0]);
      })
      .catch(() =>
        db
          .createAccountWithoutUsername([fullName, hash, email])
          .then(response => res.json(response[0]))
          .catch(console.log)
      );
  });
};

const checkUsername = (req, res, next) => {
  const db = req.app.get("db");
  const { username } = req.params;
  db
    .checkUsername([username])
    .then(response => res.json(response[0]))
    .catch(console.log);
};

const createUsername = (req, res, next) => {
  const db = req.app.get("db");
  const { username, id } = req.body;
  db
    .createUsername([username, id])
    .then(response => {
      res.json(response[0]);
    })
    .catch(console.log);
};

const updateUsername = (req, res, next) => {
  const db = req.app.get("db");
  const { username, id } = req.body;
  db
    .updateUsername([username, id])
    .then(response => {
      res.json(response[0]);
    })
    .catch(console.log);
};

module.exports = {
  login,
  createAccount,
  checkUsername,
  createUsername,
  updateUsername
};
