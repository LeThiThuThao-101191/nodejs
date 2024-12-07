import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const Schema = mongoose.Schema;
const AutoIncrement = AutoIncrementFactory(mongoose);

const bookSchema = new Schema({
    customerName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        get: (v) => v ? v.toLocaleDateString('vi-VN') : '', 
    },    
    time: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'], // Các giá trị hợp lệ
        default: 'Pending', // Thiết lập giá trị mặc định là 'Pending'
        required: true,
    }
 }); 


// Thêm id tự động tăng vào schema
bookSchema.plugin(AutoIncrement, { inc_field: 'id' }); // Chỉ định trường 'id' tự động tăng

// Tạo model 'Book' từ schema
const Book = mongoose.model('books', bookSchema);

export default Book;
