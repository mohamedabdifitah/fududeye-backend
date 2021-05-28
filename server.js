const express = require("express")
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const compression = require('compression')
const router = require("./router/UserRouter")
/*
const PORT = 9000 || process.env.PORT
*/
const app = express()
dotenv.config()
// parsing my headers to json
app.use(express.json)
// best perfomance
app.use(compression())
// port 
const PORT = 9000 || process.env.PORT
// connecting to mongodb
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true ,useUnifiedTopology: true},(err) => {
	if(err){
		consoele.log(err)

	} else{
		console.log("db was connected")

	}
})
// homepage 
app.get('/',(req,res) => {
	res.send("boom")
})
// middleWares 
app.use("/auth",router);
// app listening 
/*
app.listen(PORT, () => {
  console.log(`app listen on port ${PORT}`)
})
*/
app.listen(PORT, () => {                                  console.log(`app listen on port ${PORT}`)
})
