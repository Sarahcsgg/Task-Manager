const mongoose = require('mongoose')


const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true, 
        useCreateIndex: true,
})}

module.exports = connectDB

// mongoose.connect(connectionString, {
//     useNewUrlParser: true, 
//     useCreateIndex: true,
// })
// .then(()=> console.log('CONNECT TO THE DB..'))
// .catch((err)=>console.log(err))

