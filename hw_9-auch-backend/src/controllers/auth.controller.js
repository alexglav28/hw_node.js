import { UsersService } from '../services/users.service.js';

//POST /register 
export async function register(req, res) {
  const { email, password, role } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email & password required' });

  const exists = await UsersService.findByEmail(email);
  if (exists) return res.status(409).json({ error: 'Email already registered' });

  const user = await UsersService.createUser({ email, password, role });
  res.status(201).json({ id: user.id, email: user.email, role: user.role });
}

// POST /login
export async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email & password required' });

  const user = await UsersService.findByEmail(email);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const ok = await UsersService.verifyPassword(user, password);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

  if (user.mustChangePassword) {
    return res.status(403).json({ error: 'Must change password', next: '/change-password', userId: user.id });
  }
  res.json({ ok: true, userId: user.id, role: user.role });
}

//POST /change-password
export async function changePassword(req, res) {
  const { newPassword } = req.body;
  if (!newPassword) return res.status(400).json({ error: 'newPassword required' });

  await UsersService.changePassword(req.user.id, newPassword);
  res.json({ ok: true });
}

//POST /delete-account
export async function deleteAccount(req, res) {
  const { password } = req.body;
  if (!password) return res.status(400).json({ error: 'password required' });

  const ok = await UsersService.verifyPassword(req.user, password);
  if (!ok) return res.status(401).json({ error: 'Invalid password' });

  await UsersService.deleteUser(req.user.id);
  res.json({ ok: true, deleted: req.user.id });
}

//GET /admin
export async function adminOnly(_req, res) {
  res.json({ ok: true, area: 'admin' });
}

//POST /change-email
export async function changeEmail(req, res) {
  const { newEmail, password } = req.body;
  if (!newEmail || !password) return res.status(400).json({ error: 'newEmail & password required' });

  const ok = await UsersService.verifyPassword(req.user, password);
  if (!ok) return res.status(401).json({ error: 'Invalid password' });

  const exists = await UsersService.findByEmail(newEmail);
  if (exists) return res.status(409).json({ error: 'Email already registered' });

  await UsersService.changeEmail(req.user.id, newEmail);
  res.json({ ok: true, email: newEmail });
}
