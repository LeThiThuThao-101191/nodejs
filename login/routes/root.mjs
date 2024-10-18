import express from "express";
import fs from "fs";
const rootRouter = express.Router();

// Doc tai lieu user.txt
const [storedUsername, storedPassword] = fs.readFileSync('user.txt', 'utf8').split(':');

/* GET home page. */
rootRouter.get('/', function(req, res, next) {
    res.render('login', { title: 'Login Form' });
  });

  // Route cho '/home'
  rootRouter.get('/home', (req, res) => {
    res.render('home', { title: 'Trang chủ' });
  });
  rootRouter.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    // Kiểm tra xác thực
    if (username === storedUsername && password === storedPassword) {
      res.redirect('/home');
    } else {
      res.render('login', {
        title: 'Login Form',
        error: 'Sai tên người dùng hoặc mật khẩu. Vui long nhap lai'
      });
    }
  });
export default rootRouter;