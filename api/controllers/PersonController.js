/**
* PersonController
*
* @description :: Server-side logic for managing People
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
	create: function(req, res) {

		if (req.method == "POST") {
			Person.find()
			.where({venue: req.body.Person.venue})
			.where({time: req.body.Person.time})
			.where({date: req.body.Person.date})
			.sort('venue')
			.exec( function (err, persons) {
				if(persons ==null){
					Person.create(req.body.Person).exec( function(err, model) {
						return res.send("Successfully Created!");
					});
				}else{
					return res.send("The venue has been registered!");
				}
			});
		}
		else {
			return res.view('person/create');
		}
	},
	// json function

	json: function(req, res) {

		Person.find().exec( function(err, persons) {

			return res.json(persons);

		});
	},
	// home function
	home: function(req, res) {

		Person.find().exec( function(err, persons) {

			return res.view('person/home', {'persons': persons});

		});
	},
	
	//admin function
	admin: function(req,res){
		if (req.session.username=="admin") {
			Person.find().exec(function(err,persons){
				return res.view('person/admin',{'persons':persons});
			});
		}else{
			Person.find()
			.where({organizer:req.session.stafforganizer})
			.populateAll().exec( function (eerr,persons){
				return res.view('person/admin',{'persons':persons});
			});
		}
	},
	//eventdetails function
	eventdetails: function (req, res) {
		

		Person.findOne(req.params.id).exec( function(err, model) {

			if (model != null){
				req.session.pid=model.id; 
				req.session.quota=model.quota;
				return res.view('person/eventdetails', {'person': model});
			}
			else
				return res.send("No such person");

		});
		


	},
	//edit function
	edit: function(req, res) {

		if (req.method == "GET") {

			Person.findOne(req.params.id).exec( function(err, model) {

				if (model == null) 
					return res.send("No such person!");
				else
					return res.view('person/edit', {'person': model});

			});

		} else {

			Person.findOne(req.params.id).exec( function(err, model) {

				model.name = req.body.Person.name;
				model.shortDes = req.body.Person.shortDes;
				model.fullDes = req.body.Person.fullDes;
				model.save();
				return res.send("Record updated");
			});
		}
	},
	//quota function
	quotaminus: function(req, res) {

		Person.findOne(req.session.pid).exec( function(err, model) {

			model.quota = req.session.quota-1;
			model.save();
			return res.redirect("user/myregisteredevents");
		});
		
	},
	//quota function
	quotaplus: function(req, res) {

		Person.findOne(req.session.pid).exec( function(err, model) {

			model.quota = req.session.quota+1;
			model.save();
			return res.redirect("user/myregisteredevents");
		});
		
	},
	//delete function
	delete: function(req, res) {

		Person.findOne(req.params.id).exec( function(err, model) {

			if (model != null) {
				model.destroy();
				return res.send("Event Deleted");
			} else {		
				return res.send("Event not found");
			}

		});

	},

	// search function
	search: function (req, res) {

		if (req.method=="POST") {
			Person.find().paginate({page: req.query.page, limit: 3})
			.where({name: {contains: req.body.Person.name}})
			.where({organizer: req.body.Person.organizer})
			.where({date: {contains: req.body.Person.date}})
			.where({venue: req.body.Person.venue})
			.sort('name')
			.exec( function (err, persons) {
				if(persons !=null){
					Person.count().exec( function(err, value) {				
						var pages = Math.ceil(value / 3);
						return res.view( 'person/search', 
							{'persons': persons, 'count':pages, 'current':req.query.page});
					})
				}
			})
		}
		else{
			Person.find().paginate({page: req.query.page, limit: 2})
			.exec( function(err, persons) {

				Person.count().exec( function(err, value) {

					var pages = Math.ceil(value / 2 );

					return res.view( 'person/search', 
						{'persons': persons, 'count':pages, 'current':req.query.page});

				});

			});
		}
	}, 	
	//show event registrations
	registration: function (req, res) {

		Person.findOne(req.params.id).populateAll().exec( function (err, model) {

			if (model != null)
				return res.view('person/registration', {'persons': model});
			else
				return res.send("No such users");

		})
	},
	
};

