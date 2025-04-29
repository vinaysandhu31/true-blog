const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: 'No token. Access denied!' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to req.user
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token!' });
  }
};

module.exports = verifyToken;
