const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://sarahguimaraes89:123456@taskmanager.1cm6px3.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionString, {
    useNewUrlParser: true, 
    useCreateIndex: true,
})
.then(()=> console.log('CONNECT TO THE DB..'))
.catch((err)=>console.log(err))

