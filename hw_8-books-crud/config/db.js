import { Sequelize } from 'sequelize';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cfg = require('./config.json');

const env = process.env.NODE_ENV || 'development';
const { database, username, password, host, dialect } = cfg[env];

const sequelize = new Sequelize(database, username, password, { host, dialect, logging: false });

export async function testConnection() {
  try { await sequelize.authenticate(); console.log('Database connected'); }
  catch (e) { console.error('DB connection error:', e.message); }
}

export default sequelize;
