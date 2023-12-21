const mongoose = require("mongoose");

const connectWithDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`MongoDB Connected Successfully, ${connection.connection.host}`)
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit();
    }
}

module.exports = connectWithDB;