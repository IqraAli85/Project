// const mongoose = require('mongoose');
// mongoose.connect(process.env.mongo_URI);
// const conn = mongoose.connection;

// conn.on("connected", ()=>{
//     console.log("Mongodb Connection Successful!!");
// });
// conn.on("error", (err)=>{
//     console.log("Mongodb Connection Failed!!");
// });

// module.exports = conn; 



const mongoose = require('mongoose');


const mongoURI = 'mongodb://127.0.0.1:27017/metro1';

 mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));




    