import express from "express";
import ServiceController from "../controllers/services_controller.js";
const serviceRouter= express();
serviceRouter.get("/services",ServiceController.getAllService);
export default serviceRouter;
