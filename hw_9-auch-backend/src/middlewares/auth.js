import { User } from '../db/models/user.js';

export async function loadUser(req, _res, next) {
  try {
    const id = Number(req.header('x-user-id'));
    req.user = id ? await User.findByPk(id) : null;
    next();
  } catch (e) { next(e); }
}

export function requireAuth(req, res, next) {
  if (!req.user) return res.status(401).json({ error: 'Auth required. Set x-user-id.' });
  next();
}

export function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') return res.status(403).json({ error: 'Admin only' });
  next();
}

export function checkMustChangePassword(req, res, next) {
  if (req.user?.mustChangePassword) {
    return res.status(403).json({ error: 'Must change password', next: '/change-password' });
  }
  next();
}
