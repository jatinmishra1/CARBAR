const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://balajimahraaj123:lc38pCB9wyLAV75u@cluster0.it1ro8e.mongodb.net/carproject' , {useUnifiedTopology: true , useNewUrlParser: true})
    
    // mongodb+srv://jatinmishra0911:LcNFCMmRiuYx5RBw@cluster0.gnwylho.mongodb.net/test     mongodb atlas of jatinmishra0911
    // 9ojB7C1PcRZT72AB   password of balaji database
    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose