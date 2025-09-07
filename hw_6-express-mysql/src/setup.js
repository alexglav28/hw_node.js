import { pool } from "./db.js";

const createTableSQL = `
CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`;

try {
  await pool.query(createTableSQL);
  console.log('Таблица "products" готова');
  await pool.end();
  process.exit(0);
} catch (err) {
  console.error("Ошибка создания таблицы:", err);
  process.exit(1);
}
