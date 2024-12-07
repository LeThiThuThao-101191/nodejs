const { writeFile } = require('fs');
const http = require('http');
const os = require('os');
const EventEmitter = require('events');

// Định nghĩa lớp Logger kế thừa từ EventEmitter
class Logger extends EventEmitter {
  log(message) {
    console.log(`[LOG]: ${message}`);
    this.emit('print computer\'s infors');
  }
}

const logger = new Logger();

const hostname = '127.0.0.1';
const port = 3000;

// Nghe sự kiện 'print computer\'s infors'
logger.on('print computer\'s infors', () => {
  console.log('Completed task!');
});

// Hàm lấy thông tin hệ thống
var information = {
  osType: os.type(),
  platform: os.platform(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  usedMemory: os.totalmem() - os.freemem(),
  cpus: os.cpus().map(cpu => ({
    model: cpu.model,
    speed: cpu.speed,
    times: cpu.times
  }))
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(information, null, 2));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Ghi thông tin hệ thống vào file
writeFile('D:\\Lập trình mã nguồn mở 1\\homework_b2\\homework.txt', JSON.stringify(information, null, 2), (err) => {
  if (err) {
    console.log(err);
    return;
  }
  // Gọi phương thức log của Logger để phát sự kiện
  logger.log('print computer\'s infor');
});
