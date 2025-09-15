import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { host: process.env.DB_HOST, dialect: process.env.DB_DIALECT, logging: false }
);

export async function testConnection() {
  try { await sequelize.authenticate(); console.log(' DB connected'); }
  catch (e) { console.error(' DB connection error:', e.message); }
}
