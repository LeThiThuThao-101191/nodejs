
import User from "../models/user.js";
import jwt from "jsonwebtoken";
class UserController {
    // Hien thi tat ca Users
  static async AllUser(req, res) {
    try {
      const users = await User.find({});
      console.log(users);
    // Send response
    res.status(200).json({ message: "Load successful", data: users });
  } catch (err) {
    // Handle any errors
    res.status(500).json({ message: err.message });
  }
}
}
export default UserController;