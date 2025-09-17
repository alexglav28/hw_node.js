export function me(req, res) {
  return res.json({ user: req.user });
}

export function updateEmailPlaceholder(req, res) {
  return res.status(501).json({ note: "TODO: /update-email (homework)" });
}
export function deleteAccountPlaceholder(req, res) {
  return res.status(501).json({ note: "TODO: /delete-account (homework)" });
}
export function updateRolePlaceholder(req, res) {
  return res.status(501).json({ note: "TODO: /update-role (homework)" });
}
export function refreshTokenPlaceholder(req, res) {
  return res
    .status(501)
    .json({ note: "TODO: /refresh-token (homework, simplified)" });
}
