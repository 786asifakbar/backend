const mongoose = require('mongoose');

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
const URI = process.env.MONGODB_URI;
const connectDb = async () => {
    try {
        await mongoose.connect(URI); // Removed the deprecated options
        console.log("Connection successful to the database");
    } catch (error) {
        console.error("Database connection failed", error); // This will log the actual error
        process.exit(0); // Exit with 1 to indicate failure
    }
}

module.exports = connectDb;
