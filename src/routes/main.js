const express = require("express")
const async = require("hbs/lib/async")

const routes=express.Router()


// feching data
const detail=require("../models/detail")
const service= require("../models/service")
const slider=require("../models/slider")
const contact=require("../models/contact")

routes.get("/",async(req,res)=>{
    const details=await detail.findOne({"_id":"63e4f6bc05d84ef3b996a10d"})
    const services=await service.find()
    const slides=await slider.find()
    
    res.render("index",{
        details:details,
        slides:slides,
        service:services
    })
})
routes.get("/gallery",async(req,res)=>{
    const details=await detail.findOne({"_id":"63e4f6bc05d84ef3b996a10d"})
    res.render("gallery",{
        details:details
    })
})

// process contact form

routes.post("/process-contact-form",async(req,res)=>{
    console.log("form is submintied")
    try{
        const data=await contact.create(req.body)
        console.log(data)
        res.redirect("/")
    }catch(e){
        console.log(e)
        res.redirect("/")
    }
})


module.exports=routes