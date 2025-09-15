'use strict';

module.exports = {
  async up(qi, Sequelize) {
    await qi.createTable('Users', {
      id:                 { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      email:              { type: Sequelize.STRING, allowNull: false, unique: true },
      passwordHash:       { type: Sequelize.STRING, allowNull: false },
      mustChangePassword: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
      role:               { type: Sequelize.ENUM('user', 'admin'), allowNull: false, defaultValue: 'user' },
      createdAt:          { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt:          { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
  },
  async down(qi) {
    await qi.dropTable('Users');
  }
};
