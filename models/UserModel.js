const mongoose = require("mongoose")

const UserSchema  = new mongoose.Schema({
	email :{ string required},
	username :{string required}, 
	passwordHash : {string required},


})
const UserModel = mongoose.model("user",UserSchema)
module.export = UserModel
