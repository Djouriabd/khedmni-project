const express = require("express")
const mongoose = require("mongoose")
const cors =require("cors")
const User = require('./models/User')
const Job = require('./models/Jobs')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const authMiddleware = require('./middlewares/AuthMiddleware')
const admMiddleware = require('./middlewares/AdminMiddleware')

const app = express()
app.use(express.json()) 

app.use(
    cors({
        origin:'http://localhost:5173'
    }),
)

app.post("/register",async (req,res)=>{
    try {
        //get user input
        const {name,surname,username,email,password} = req.body

        //verify is email does exist before 
        const isExistsEmail = await User.findOne({email:email})
        const isExistUsername = await User.findOne({username:username})

        if(isExistUsername){
            return res.status(400).json({message:"this username exist already"})
        }else if(isExistsEmail){
            return res.status(400).json({message:"this email exist already"})
        }
        const hashedPassword = await bcrypt.hash(password,12)

        //create new user
        const newUser = new User({name:name,surname:surname,username:username,email:email,password:hashedPassword})
        await newUser.save()

        //send the response to the user
        res.json({message:"user has being created successfully",user:newUser})
    } catch (error) {
        console.log(error)
        res.json({message:error.message}) 
    }
})

app.post("/login",async (req,res)=>{
    try {
        const user1 = await User.findOne({email:req.body.email})
        if(!user1){
            return res.status(400).json({message:"invalid credentials"})
        }
        const isValidPassword1= await bcrypt.compare(req.body.password,user1.password)

        if(!isValidPassword1){
            return res.status(400).json({message:"invalid credentials"})
        }

        user1.password = undefined

        const token = jwt.sign({userName:user1.username,userEmail:user1.email,role:"ADMIN"},"SECRET",{
            expiresIn:"10d"
        })

        res.json({message:"you've been logged in successfully",user:user1,token:token})
    } catch (error) {
        res.json({message:error.message})
    }
})

app.get("/test",authMiddleware,admMiddleware,(req,res)=>{
    console.log(req.user)
    console.log("welcome")
})

app.get("/jobs",async (req,res)=>{
    const jobs = await Job.find()
    res.json({jobs:jobs}) 
})

mongoose.connect("mongodb://localhost:27017/auth_login",{
    serverSelectionTimeoutMS:5000, 
}).then(()=>{
    console.log("connected to mongodb")
    app.listen(5000,()=>{
    console.log("we logged in mongodb") 
    })
}).catch((err)=>{
    console.log(err)
})
