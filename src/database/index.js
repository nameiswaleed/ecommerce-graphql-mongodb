const mongoose = require('mongoose');
const { mongoUri, dbName } = require('../config');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoUri,{dbName});
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}
connectDB()
module.exports = mongoose.connection
