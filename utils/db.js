const mongoose = require('mongoose');

const URI = "mongodb://127.0.0.1:27017/mern_admin";

const connectDb = async () => {
    try{
        await mongoose.connect(URI);
        console.log("connection successfull to database");  
    }catch (error) {
        console.error("database connection field");
        process.exit(0);
    }
}

module.exports = connectDb;



// 

// const connectDb = async () => {
//   try {
//     await mongoose.connect('YOUR_MONGO_DB_CONNECTION_STRING', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log('MongoDB connected successfully!');
//   } catch (err) {
//     console.error('MongoDB connection error:', err);
//     // Terminate the process in case of connection failure
//     process.exit(1);  // 1 indicates that the process failed
//   }
// };

// module.exports = connectDb;

