var mongoose=require('mongoose')
  , Schema=mongoose.Schema;


var userSchema = new Schema({
	username : {type: String},
  password : {type: String},
  profile_pic : {type: String},
	isadmin : {type : Boolean, default : false}
});

var user = mongoose.model('user', userSchema);


module.exports = {
  Users: user
};
