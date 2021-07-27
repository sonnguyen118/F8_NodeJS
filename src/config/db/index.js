
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        });
        console.log('Connceted Thành Công ! Successfully!!!!')

    } catch (error) {
        console.log('Connceted Thất bại ! Failure !!!!')
    }

}

module.exports = {connect};