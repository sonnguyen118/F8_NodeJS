// file Index.js
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3000;

const db = require('./config/db');
const route = require('./routes');

//Conect DB
db.connect();
//Static file cho img băng cao độ của các file ngoài ( vượt qua thư mục public)
app.use(express.static(path.join(__dirname, 'public')));

// Để đọc được biến body
app.use (express.urlencoded())

app.use(methodOverride('_method'));

// HTTP loger
// app.use(morgan('combined'))
// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: 'hbs', //Đổi tên handlebars thành hbs
        helpers: {
            sum: (a, b) => a + b, // thêm function để công trừ @index chỉ mục số thứ tự 1-2-3 chứ không bắt đầu từ 0-1-2-3
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// console.log('PATH: ', path.join(__dirname, 'resources/views'))

// khởi tạo tuyến đường
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
