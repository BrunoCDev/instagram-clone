INSERT INTO users (full_name, password, email) VALUES($1, $2, $3);
SELECT id, email, full_name FROM users WHERE email = $3 AND password = $2;