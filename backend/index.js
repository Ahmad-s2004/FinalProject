const express = require('express')
const colors = require('colors')
const cors = require('cors')
const router = require('./routers/userRouter.js')
const commentRoute = require('./routers/comment.js')
const userRoute = require('./routers/user.js')
const dbConnection = require('./database/dbconn')
const User = require("./models/userModel")
const showItem = require('./controllers2/women.js')
const showItem2 = require('./controllers2/men.js')
const showItem3 = require('./controllers2/kids.js')
const showItem4 = require('./controllers2/home.js')
const showItem6 = require('./controllers2/newIn.js')
const showItem5 = require('./controllers2/accessories.js')
const showItem7 = require('./controllers2/homeget.js')
const HomeSchema = require('./models/homeModel.js')
const KidsSchema = require('./models/kidsModel.js')
const AccessoriesSchema = require('./models/accessoriesModel.js')
const NewInSchema = require('./models/newInModel.js')
const MenSchema = require('./models/menModel.js')
const WomenSchema = require('./models/womenModel.js')
// const WomenSchema = require('./models/womenModel.js')
// HomeSchema


dbConnection()

const app = express()


app.use(cors());
app.use('/api/v3/auth',express.static('uploads'))
app.use(express.json())
app.get("/api/v3/auth/data/women",showItem)
app.get("/api/v3/auth/data/men",showItem2)
app.get("/api/v3/auth/data/kids",showItem3)
app.get("/api/v3/auth/data/home",showItem4)
app.get("/home/:id",async(req, res) => {
    let result = await HomeSchema.findById(req.params.id)
        res.send(result)
  })
app.get("/women/:id",async(req, res) => {
    let result = await WomenSchema.findById(req.params.id)
          res.send(result)
})

app.get("/men/:id",async(req, res) => {
    let result = await MenSchema.findById(req.params.id)
        res.send(result)
  })

  app.get("/newin/:id",async(req, res) => {
    let result = await NewInSchema.findById(req.params.id)
        res.send(result)
  })

  app.get("/accessories/:id",async(req, res) => {
    let result = await AccessoriesSchema.findById(req.params.id)
        res.send(result)
  })

  app.get("/kids/:id",async(req, res) => {
    let result = await KidsSchema.findById(req.params.id)
        res.send(result)
  })
  

app.get("/api/v3/auth/data/accessories",showItem5)
app.get("/api/v3/auth/data/newIn",showItem6)

app.use("/api/v1/auth",router)
app.use("/api/v2/auth",commentRoute)
app.use("/api/v3/auth",userRoute)
// app.use("/api/v3/auth",showItem)

const PORT = process.env.port || 4000;


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`.bgMagenta)
})