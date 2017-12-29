var mongoose = require('mongoose');
/*
var UserSchema = new mongoose.Schema({
	empno: String,
	ename: String,
	sal: String,
	hiredate: String,
	dob: String,
	deptno: String
});
*/

var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User'); 