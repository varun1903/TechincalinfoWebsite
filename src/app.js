const express=require("express");
const hbs=require("hbs")
const app=express()
const mongoose=require("mongoose")
const routes=require('./router/main')

// const Detail=require("./module/Contact")
const Detail=require("./module/Detail")
const Slider=require("./module/Slider")
const Service=require("./module/Service");
const contact = require("./module/contact");

app.use('/static',express.static("public"))
app.use('',routes)

// hbs
app.set('view engine' ,'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")

mongoose.connect('mongodb://localhost/website_tut')
  .then(() => {
     console.log('Connected to MongoDB');
    //  contact.create([
    //   {
    //     id: "1",
    //     email: "john.doe@example.com",
    //     phone: "123-456-7890",
    //     query: "I have a question about your services.",
    //   },
    //   {
    //     id: "2",
    //     email: "jane.doe@example.com",
    //     phone: "987-654-3210",
    //     query: "I'd like to schedule a consultation.",
    //   },
    //   {
    //     id: "3",
    //     email: "bob.smith@example.com",
    //     phone: "555-123-4567",
    //     query: "I'm interested in learning more about your products.",
    //   },
    // ])
//     Service.create([{
//       icon:'fab fa-accusoft',
//       title:'Provide best courses',
//       description:'we prvide courses that helps our students in learning and getting placmenet.',
//       linkText:'https://www.Techincalsolution.com',
//       link:'check'

//     },
   
//  {
//       icon:'fab fa-affiliatetheme',
//       title:'Provide best courses',
//       description:'we prvide courses that helps our students in learning and getting placmenet.',
//       linkText:'https://www.Techincalsolution.com',
//       link:'learn'

//     },
//    {
//       icon:'fab fa-accusoft',
//       title:'Provide best courses',
//       description:'we prvide courses that helps our students in learning and getting placmenet.',
//       linkText:'https://www.Techincalsolution.com',
//       link:'check'

//     }
  
//   ])
    //  Slider.create([{
    //   title:'learn java in very easy manner',
    //   subTitle:"java is one of the best",
    //   imageUrl:"/static/images/img5.png"
    //  },
   
    // {
     
    //   title:'lpyhton lanugagesr',
    //   subTitle:"java is one of the best",
    //   imageUrl:"/static/images/tic.png"
    //  },
    // {
    //   title:'DSA  is not languages',
    //   subTitle:"java is one of the best",
    //   imageUrl:"/static/images/toe.png"
    //  },
    // ])











//      Detail.create({
//         brandName:"Technical Solution",
//         brandIconUrl:"https://yt3.googleusercontent.com/dVIvYpouex-j2UIie4tE0zborNv950LpORLEV_b9W8YXr9-6gt2H9U6UibhGqA3m-OAEgVCW=s160-c-k-c0x00ffffff-no-rj",
//     links:[{
//         label:"Home",
//         url:"/"
//     },
//     {
//         label:"services",
//         url:"/services"
//     },
//     {
//         label:"Gallery",
//         url:"/gallery"
//     },
//     {
//         label:"About",
//         url:"/about"
//     },
//     {
//         label:"Contact Us",
//         url:"/contact-us"
//     }
    
// ]
    
    // })
  })
  .catch(err => {
     console.error('Error connecting to MongoDB:', err);
  });


app.listen(process.env.PORT |5555,()=>{
    console.log("jnfjnfjrn");
});