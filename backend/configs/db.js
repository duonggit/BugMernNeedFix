const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("DB Connection Successful");
    } catch (error) {
        console.error();
        process.exit();
    }
};

module.exports = { connectDB }