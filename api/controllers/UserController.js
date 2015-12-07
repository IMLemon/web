/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
	//create function
	register: function(req, res) {

		if (req.method == "POST") {

			User.create(req.body.User).exec( function(err, model) {
				return res.view('user/signin');

			});
		}
		else {

			return res.view('user/register');
		}
	},
	//register function in app
	registerapp: function(req, res) {
		User.create(req.body.User).exec( function(err, model) {
			return res.send("Register Successfully!");
		});
	},
	// json function

	json: function(req, res) {

		User.find().exec( function(err, users) {

			return res.json(users);

		});
	},
	// sign in function
	signin: function (req, res) {
		if (req.method == "GET")
			return res.view('user/signin');
		else {

			User.findOne({username:req.body.username})
			.exec( function (err, user) {

				if (user == null) 
					return res.send("No such user");

				if (user.password != req.body.password) 
					return res.send("Wrong Password");

				req.session.username = req.body.username;  
				req.session.userid=user.id; 
				req.session.userdept=user.dept;
				req.session.stafforganizer=user.organizer;
				return res.redirect("person/home")
			})

		}
	}, 
    // sign in function in app
    signinapp: function (req, res) {
    	User.findOne({username:req.body.username})
    	.exec( function (err, user) {

    		if (user == null) 
    			return res.send("No such user");

    		if (user.password != req.body.password) 
    			return res.send("Wrong Password");

    		req.session.username = req.body.username;  
    		req.session.userid=user.id; 
    		req.session.userdept=user.dept;
    		req.session.stafforganizer=user.organizer;
    		return res.send("Login Successfully");
    	})
    }, 

    // logout function
    logout: function (req, res) {  
    	req.session.username = null;
    	return res.view('user/signin');
    }, 	
    // logout function in app
    logoutapp: function (req, res) {  
    	req.session.username = null;
    	return res.send("Logout");
    },


    //addevent function
    addevent:function(req,res){


    	User.findOne(req.session.userid).exec( function (err, model) {

    		if (model !== null) {
    			model.supervises.add(req.session.pid);
    			model.save( function (err, model) {

    				if (err) return res.send("Already registered");

    				return res.redirect("person/quotaminus");
    			});
    		}
    		else {
    			return res.send("User not found!");
    		}
    	})
    },


     //addevent function in app
     addeventapp:function(req,res){


     	User.findOne(req.session.userid).exec( function (err, model) {

     		if (model !== null) {
     			model.supervises.add(req.body.pid);
     			model.save( function (err, model) {

     				if (err) return res.send("Already registered");

     				return res.send("Register Successfully.");

     			});
     		}
     		else {
     			return res.send("User not found!");
     		}
     	})
     },
    //show registered events
    myregisteredevents: function (req, res) {

    	User.findOne(req.session.userid).populateAll().exec( function (err, model) {

    		if (model != null)
    			return res.view('user/myregisteredevents', {'users': model});
    		else
    			return res.send("No such events");

    	})
    },
     //judge the event registration
     show: function (req, res) {

     	User.findOne(req.session.userid).populateAll({id:req.params.id}).exec( function (err, model) {

     		if (model != null)
     			return res.send("UnReg");
     		else
     			return res.send("No such events");

     	})
     },
     //myregistration to app
     regevent: function (req, res) {

     	User.findOne(req.session.userid).populateAll().exec( function (err, model) {

     		if (model != null)
     			return res.json(model.supervises);
     		else
     			return res.send("No such events");

     	})
     },

    //unregistered events
    unreg: function (req, res) {

    	User.findOne(req.session.userid).exec( function (err, model) {

    		if (model !== null) {
    			model.supervises.remove(req.params.id);
    			model.save();
    			return res.redirect("person/quotaplus");
    		}
    		else {
    			return res.send("User not found!");
    		}
    	})

    },
    //unregistered events in app
    unregapp: function (req, res) {

    	User.findOne(req.session.userid).exec( function (err, model) {

    		if (model !== null) {
    			model.supervises.remove(req.body.pid);
    			model.save();
    			return res.send("Unregistered!");
    		}
    		else {
    			return res.send("User not found!");
    		}
    	})

    },

    //manage staff function
    manage: function(req,res){
    	if(req.method=="GET"){
    		User.find()
    		.where({dept: "Staff"})
    		.exec(function(err,staffs){
    			return res.view('user/manage',{'staffs':staffs});
    		});
    	}else{
    		User.findOne(req.session.sid).exec( function(err, model) {
    			model.organizer = req.body.Person.organizer;
    			model.save();
    			return res.send("Add organizer to staff");
    		});
    	}
    },
    //edit staff function
    edit: function(req, res) {

    	if (req.method == "GET") {

    		User.findOne(req.params.id).exec( function(err, model) {

    			if (model == null) 
    				return res.send("No such person!");
    			else
    				return res.view('user/edit', {'staff': model});

    		});

    	} else {

    		User.findOne(req.params.id).exec( function(err, model) {

    			model.organizer = req.body.Staff.organizer;
    			model.save();
    			return res.send("Record updated");
    		});
    	}
    },
    //delete staff
    delete: function(req, res) {

    	User.findOne(req.params.id).exec( function(err, model) {

    		if (model != null) {
    			model.destroy();
    			return res.send("Staff Deleted");
    		} else {		
    			return res.send("Staff not found");
    		}

    	});

    },




};

