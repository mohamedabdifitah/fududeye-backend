const router = require("express").Router();

router.post("/",(req,res) =>{
	try{
		const {email,username,password} = req.body;
	console.log(email)

	}
	catch (err){
		console.log(err)
		res.status(500).send()
	

		
	}

})
module.exports= router
