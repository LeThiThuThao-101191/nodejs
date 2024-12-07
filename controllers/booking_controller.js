
import Book from "../models/booking.js"; // Đảm bảo đường dẫn đúng đến tệp model booking.js
class BookingController {
    static async index(req, res) {
        let books; // Truy van du lieu tu cơ sở dữ liệu MongoDB.
        
        try {
          // Luôn lấy tất cả người dùng mà không cần tham số tìm kiếm
          books = await Book.find({}); // Tìm tất cả người dùng trong cơ sở dữ liệu
      
          // Render trang 'book' với danh sách người dùng
          res.render("book", { title: "Book", books });
        } catch (error) {
          console.error('Lỗi khi lấy người dùng:', error);
          res.status(500).send('Lỗi khi lấy dữ liệu người dùng');
        }
      }
      
      // Dat cho moi
      static async new(req, res) {
        res.render("booknew", { title: "Book New" });
      }
      
      static  async create(req, res) {
        let {customerName, date, time, status}= req.body;
        let books = await Book.create({ customerName, date, time, status });
        console.log(books);
        
        // Sau khi lưu, chuyển hướng về trang danh sách người dùng
        if (books) {
        res.redirect("/books");
        } else {
        res.render("booknew", { title: "Book New" });
        }
    }
    // Xoa
    static async delete(req, res) {
      
      let id = req.params.id;
      let { deletedCount } = await Book.deleteOne({ _id: id });
      if (deletedCount == 0) {
        console.log("Khong xoa duoc !!");
      } else {
        console.log("Da xoa duoc !!");
      }
      res.redirect("/books");
    }
    // Sửa 
    
    static async edit(req, res) {
      let id = req.params.id;
      try {
        // Tìm booking cần sửa bằng ID
        let book = await Book.findById(id);
    
        if (!book) {
          return res.status(404).send("Booking không tồn tại.");
        }
    
        // Render trang edit với thông tin booking
        res.render("bookedit", { title: "Edit Booking", book });
      } catch (error) {
        console.error('Lỗi khi tìm kiếm booking:', error);
        res.status(500).send('Lỗi khi tìm kiếm dữ liệu booking');
      }
    }
    

  // Cập nhật đặt chỗ
  static async update(req, res) {
    let id = req.params.id;
    let { customerName, date, time, status } = req.body;
  
    try {
      // Cập nhật booking trong cơ sở dữ liệu
      let updatedBook = await Book.findByIdAndUpdate(
        id,
        { customerName, date, time, status },
        { new: true } // Trả về document đã được cập nhật
      );
  
      if (!updatedBook) {
        return res.status(404).send("Booking không tồn tại.");
      }
  
      // Sau khi cập nhật, chuyển hướng về trang danh sách booking
      res.redirect("/books");
    } catch (error) {
      console.error('Lỗi khi cập nhật booking:', error);
      res.status(500).send('Lỗi khi cập nhật dữ liệu booking');
    }
  }
  
  }
  
  
      

export default BookingController;