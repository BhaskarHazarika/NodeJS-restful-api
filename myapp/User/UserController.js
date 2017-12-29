var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));


var User = require('./User');


//Create a new user


router.post('/', function (req, res) {
    User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});
/*
router.post('/', function(req, res){

	User.create({
			empno : req.body.empno,
			ename : req.body.ename,
			sal : req.body.sal,
			hiredate : req.body.hiredate,
			dob : req.body.dob,
			deptno : req.body.deptno 
		},
		function(err, user){
			if (err) return res.status(500).send("There was a problem adding the information into the database.");
			res.status(200).send(user);		
		});
});

*/

//Returns all the user in the database

router.get('/', function(req, res){

	User.find({}, function(err, user){
		if (err) return res.status(500).send("There was a problem finding the users");
		res.status(200).send(user);
	});
});


//test to find by name
/*
router.get('/:name', function(req, res){

	User.find({"name": "req.params.name"}, function(err, user){
		if (err) return res.status(500).send("There was a problem finding the users");
		res.status(200).send(user);
	});
});

*/

//Gets a single user from the database

router.get('/:id', function(req, res){

	User.findById(req.params.id, function(err, user){
		if (err) return res.status(500).send("There was a problem finding the user");
		if (!user) return res.status(404).send("No user found");
		res.status(200).send(user);
	});
});

//Delete a user from the database
router.delete('/:id', function(req, res){

	User.findByIdAndRemove(req.params.id, function(err, user){
		if (err) return res.status(500).send("There was a problem deleting the user");
		res.status(200).send("User " + user.name + " was deleted.");
	});	
});


// UPpdates a single user from the database
router.put('/:id', function (req, res) {
    
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
	});	
});

module.exports = router;
