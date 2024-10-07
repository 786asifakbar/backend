const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;
const connectDb = async () => {
    try {
        await mongoose.connect(URI); // Removed the deprecated options
        console.log("Connection successful to the database");
    } catch (error) {
        console.error("Database connection failed", error); // This will log the actual error
        process.exit(1); // Exit with 1 to indicate failure
    }
}

module.exports = connectDb;
