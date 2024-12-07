import express from "express";
import BookingController from "../controllers/booking_controller.js";
const bookRouter = express.Router();

bookRouter.get("/", BookingController.index);
bookRouter.get("/new",BookingController.new);
bookRouter.post("/create",BookingController.create);
bookRouter.delete("/delete/:id", BookingController.delete);
bookRouter.get("/edit/:id", BookingController.edit);
bookRouter.post("/edit/:id", BookingController.update);


export default bookRouter;