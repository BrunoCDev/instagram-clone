INSERT INTO users (full_name, password, email, username) VALUES($1, $2, $3, $4);
SELECT id, email, full_name, username FROM users WHERE email = $3 AND password = $2;