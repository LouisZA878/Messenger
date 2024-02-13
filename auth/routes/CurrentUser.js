const jwt = require('jsonwebtoken')
const currentUser = (req, res, next) => {
    if (!req.session?.token) {
      return next();
    }
  
    try {
      const payload = jwt.verify(
        req.session.token,
        'auth'
      );
      req.currentUser = payload;
    } catch (err) {}
  
    next();
  }


module.exports = currentUser


