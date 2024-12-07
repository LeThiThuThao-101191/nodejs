import express from "express";
import { connectdb } from "./config/mongo.js";
import serviceRouter from "./routes/service_routes.js";
import reservationRouter from "./routes/reservation_routes.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/user_routes.js";
import AuthMiddleware from "../apibookinng/Middleware/authMiddleware.js";

const app = express();
const port = 5000;

connectdb();

// set view engine
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.static("public"));

// Routes
app.use("/api/auth", authRouter);
app.use("/", userRouter);
app.use("/", serviceRouter);

// Sử dụng middleware auth cho các route cần bảo vệ
app.use('/reservations', AuthMiddleware.protect, reservationRouter);

app.listen(port, () => {
  console.log("Connect successful!!");
});
