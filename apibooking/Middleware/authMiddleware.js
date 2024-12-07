import jwt from 'jsonwebtoken';

class AuthMiddleware {
  static async protect(req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
      }

      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, 'secret');
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized', error: error.message });
    }
  }
}

export default AuthMiddleware;
