const { default: mongoose } = require("mongoose")
const moogoose=require("mongoose")

const Slider=mongoose.Schema({
    title:String,
    subtitle:String,
    imageUrl:String,
    class:String
})
module.exports=mongoose.model('slider',Slider)