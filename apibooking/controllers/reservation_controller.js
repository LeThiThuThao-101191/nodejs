import Reservation from "../models/reservation.js";

class ReservationController {
  // Tạo đặt chỗ mới
  static async createReservation(req, res) {
    try {
      const reservation = await Reservation.create({
        ...req.body,
        user_id: req.user.id, // Lấy user_id từ middleware bảo vệ
      });
      res.status(201).json(reservation);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Lấy danh sách đặt chỗ của người dùng
  static async getUserReservations(req, res) {
    try {
      const reservations = await Reservation.find({ user_id: req.user.id });
      res.json(reservations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Xóa đặt chỗ
  static async deleteReservation(req, res) {
    try {
      await Reservation.findByIdAndDelete(req.params.id);
      res.json({ message: "Reservation deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default ReservationController;
