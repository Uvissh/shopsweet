const jwt = require('jsonwebtoken');

module.exports = (roles = []) => (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  const decoded = jwt.verify(token, 'secret');

  if (roles.length && !roles.includes(decoded.role)) {
    return res.sendStatus(403);
  }

  req.user = decoded;
  next();
};