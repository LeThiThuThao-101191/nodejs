import express from "express";
import fs from "fs";
const rootRouter = express.Router();
const vehiclePlatesData = JSON.parse(fs.readFileSync('vehicle_plates.json', 'utf8'));
/* GET home page. */
rootRouter.get('/', function(req, res, next) {
  res.render('vehicle', { vehiclePlates: vehiclePlatesData });

});

export default rootRouter;
