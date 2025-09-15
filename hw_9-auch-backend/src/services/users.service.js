import bcrypt from 'bcrypt';
import { User } from '../db/models/user.js';

const SALT_ROUNDS = 10;

export const UsersService = {
  findByEmail(email) {
    return User.findOne({ where: { email } });
  },

  async createUser({ email, password, role = 'user', mustChangePassword = false }) {
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    return User.create({ email, passwordHash, role, mustChangePassword });
  },

  verifyPassword(user, plain) {
    return bcrypt.compare(plain, user.passwordHash);
  },

  async changePassword(userId, newPassword) {
    const passwordHash = await bcrypt.hash(newPassword, SALT_ROUNDS);
    await User.update({ passwordHash, mustChangePassword: false }, { where: { id: userId } });
    return User.findByPk(userId);
  },

  deleteUser(userId) {
    return User.destroy({ where: { id: userId } });
  },

  async changeEmail(userId, newEmail) {
    await User.update({ email: newEmail }, { where: { id: userId } });
    return User.findByPk(userId);
  }
};
