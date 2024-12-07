import Service from "../models/service.js";
class ServiceController{
// Hien thi tat ca services
static async getAllService(req, res) {
    try {
      // Fetch all users from the database
      const services = await Service.find({});
      console.log(users);
      
      // Send response
      res.status(200).json({ message: "Load successful", data: services });
    } catch (err) {
      // Handle any errors
      res.status(500).json({ message: err.message });
    }
  }
}
export default ServiceController;