import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

export const User = sequelize.define(
  'User',
  {
    id:                 { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email:              { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
    passwordHash:       { type: DataTypes.STRING, allowNull: false },
    mustChangePassword: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    role:               { type: DataTypes.ENUM('user', 'admin'), allowNull: false, defaultValue: 'user' }
  },
  { tableName: 'Users', timestamps: true }
);
