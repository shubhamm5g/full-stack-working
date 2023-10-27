const express = require("express")

const app=express()

const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({
    extended:true
}))
//db conection
const mongoose=require("mongoose")
const detail=require("./models/detail")
const slider=require("./models/slider")
const service=require("./models/service")
mongoose.set('strictQuery', false)
    mongoose.connect("mongodb://localhost:27017/dynamic_page_learing",()=>{
    console.log("db connected")
    // service.create([
    //     {
    //        icon:'fab fa-accusoft',
    //        title:'Provide best courses',
    //        description:"the code is not workin wehn",
    //        linkText:'https://www.learncodewith',
    //        link:'Check',
    //     },
    //     {
    //         icon:'fab fa-user',
    //         title:'not so  best courses',
    //         description:"the cod wehn",
    //         linkText:'https://www.google.com',
    //         link:'Google',
    //      },
    // ])

    // detail.create({
    //     brandName:"shubham maurya",
    //     brandIconUrl:"https://google.com/",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact us",
    //             url:"/contact-us"
    //         }
    //     ]
    // })

    // slider.create([
    //     {
    //        title:'learn java in very easy manner',
    //        subTitle:"one of the first want to greate in the pufing in",
    //        imageUrl:"/static/images/s1.png"
    //     },
    //     {
    //         title:'learn createing  easy manner',
    //         subTitle:"ondfdsfggf first want to greate in the pufing in",
    //         imageUrl:"/static/images/s2.png"
    //      },
    //      {
    //         title:'learn html in create in the in very easy manner',
    //         subTitle:"one of the first wan",
    //         imageUrl:"/static/images/s3.png"
    //      }

    // ])
})



// templete engine
const hbs=require("hbs")

app.set("view engine","hbs")
app.set("views","views")
        //for partial registration
    hbs.registerPartials("views/partials")

// static configression
app.use("/static",express.static("public"))

//routers
const routes=require("./routes/main")
const urlencoded = require("body-parser/lib/types/urlencoded")
app.use("/",routes)

app.listen(process.env.PORT|6060,()=>{
    console.log("server started")
})