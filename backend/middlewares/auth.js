const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ msg: "User not authenticated", success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.id = decoded.userId;
    req.role = decoded.role;

    next();
  } catch (error) {
    return res.status(401).json({
      msg: error.name === "TokenExpiredError" ? "Token expired" : "Invalid token",
      success: false,
    });
  }
};

module.exports = isAuthenticated;
