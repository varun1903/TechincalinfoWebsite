const express=require('express')
const{route}=require('express/lib/application')
const routes=express.Router()
const app=express();
const bodyParser=require("body-parser");
const Detail=require("../module/Detail")
const Slider = require('../module/Slider');
const contact = require('../module/contact');

const Service = require('../module/Service');
// static snd css and style.css
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('', routes)
// app.use('/static',express.static("public"))
// app.use(bodyParser.json()); // Update this line to use bodyParser.json()

app.use('', routes)
app.use('/static', express.static("public"))
// app.use('', routes)
// app.use('', routes)


routes.get("/",async (req,res)=>{
    const details = await Detail.findOne({"_id": "66f6ed51b5cbfb592e54d418"});
const slides =  await Slider.find()
// console.log('Slider operation completed')
// console.log(slides)
const services= await Service.find()

     res.render("index",{
details:details,     slides : slides, 
services:services
     });
     
 
});

routes.get('/gallery' ,async(req,res)=>{
    const details = await Detail.findOne({"_id": "66f6ed51b5cbfb592e54d418"});
   
    res.render("gallery",{
        details:details
             })
})

routes.post("/process-contact-form", async (request, response) => {
     console.log("form data submit")
     console.log(request.body)
     try {
         const data = await contact.create(request.body)
         console.log(data)
         response.redirect("/")
 
     } catch (e) {
         console.log(e)
     }
 });
module.exports=routes