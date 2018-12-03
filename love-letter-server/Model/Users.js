const mongoose =require('../middleware/database')

const users = mongoose.Schema({
    phone:String,
    name:String,
    content:String,
    updateTime:Number,
    information:{
        recipients:String,
        phone:Number,
        address:String,
        date:String
    }
})

var usersModel = mongoose.model('usersModel', users);
module.exports = usersModel