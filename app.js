import express from "express";
import router from "./routes/root.js"; // Đảm bảo đường dẫn đúng tới tệp routes/root.js trong Routes 
import { connectdb } from "./config/connectdb.js";
import mongoose from "mongoose";
import bookRouter from "./routes/booking.js";
import bodyParser from 'body-parser'; 
import methodOverride from 'method-override'; // Nhập khẩu method-override

const app = express();
const port = 8080; 

// Ket noi mongodb
connectdb();

 app.set('view engine', "ejs");
 app.set("views", "./views");
 app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  // Nếu gửi dữ liệu dưới dạng JSON
app.use(
    methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body){
        var method = req.body._method;
        delete req.body._method;
        return method;
      }
    })
  );
  

 // Định tuyến cho trang chủ
 app.use("/", router);
 
 app.use("/books", bookRouter);

 // Cong chay
app.listen(port, () =>{
    console.log("server started!!");
 });
