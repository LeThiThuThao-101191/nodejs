import express from 'express';
import ReservationController from "../controllers/reservation_controller.js";
import AuthMiddleware from '../Middleware/authMiddleware.js';

const reservationRouter = express.Router();

// Định nghĩa các route cho đặt chỗ
reservationRouter.post("/", AuthMiddleware.protect, ReservationController.createReservation);
reservationRouter.get("/", AuthMiddleware.protect, ReservationController.getUserReservations);
reservationRouter.delete("/:id", AuthMiddleware.protect, ReservationController.deleteReservation);

export default reservationRouter;
