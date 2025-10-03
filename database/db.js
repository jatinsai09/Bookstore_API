const mongoose = require('mongoose');

const connectToDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://jatinsai09:JatinSai%23S60@cluster0.xuxnwkc.mongodb.net/')
        console.log("mongodb is connected successfully!");
    } catch(error) {
        console.error('Mongodb connection failed', error)
        process.exit(1);
    }
};

module.exports = connectToDB;