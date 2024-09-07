const mongoose = require('mongoose')

async function connectToDb(URL){
    return await mongoose.connect(URL);
} 

module.exports = connectToDb;