import jwt from 'jsonwebtoken';
import User from "../models/user.js";
class authController {
    static async register (req, res)  {
        try {
          const { username, password } = req.body;
          const user = await User.create({ username, password });
          res.status(201).json({ message: 'User registered successfully', user });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      };
      
      static async login  (req, res)  {
        try {
          const { username, password } = req.body;
          const user = await User.findOne({ username });
          if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
          }
          const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1d' });
          res.json({ token });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      };
}
export default authController;