/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

 module.exports.bootstrap = function(cb) {
 	// var user = {"username": "admin", "password":"123", "id":1}
 	// User.create(user).exec( function (err, model)  {});
 	// user = {"username": "s1", "password":"123", "id":2}
 	// User.create(user).exec( function (err, model)  {});

 	// events = {"name": "Singing Contest",
 	// "shortDes": "一年一度既HKBU Singing Contest又到喇！身為浸大人既你點可能錯過！？無論你係咩系、Bachelor/AD Promgramme，我地都歡迎你報名！身邊有唱得之人就梗係要推薦佢黎喇！",
 	// "fullDes": "一年一度既HKBU Singing Contest又到喇！身為浸大人既你點可能錯過！？無論你係咩系、Bachelor/AD Promgramme，我地都歡迎你報名！身邊有唱得之人就梗係要推薦佢黎喇！ 主辦單位：音樂學會 報名日期：4/2-8/2 (12-6pm) 報名地點：Main Podium 詳情可閱Poster 或去到報名Counter查詢",
 	// "image": "https://scontent-hkg3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/537765_488319141230614_2037745642_n.jpg?oh=7aa48d32b25169e36c8a131255123ebe&oe=56645008",
 	// "organizer": "Music Society",
 	// "date": "2015-10-02",
 	// "time": "Evening",
 	// "venue": "AC Hall",
 	// "quota": "350",
 	// "id": 1}
 	// Person.create(events).exec( function (err, model)  {});

 	// events = {"name": "Culture and Politics in European Cinema",
 	// "shortDes": "Michael Balcon and Twentieth Century British Cinema: Art, Industry and National Culture",
 	// "fullDes": "Michael Balcon and Twentieth Century British Cinema: Art, Industry and National Culture. Dr. Mark Hampton.",
 	// "image": "http://gis.hkbu.edu.hk/events/20150925-1023.jpg",
 	// "organizer": "gis",
 	// "date": "2015-10-09",
 	// "time": "Evening",
 	// "venue": "SWT501",
 	// "quota": "80",
 	// "id": 2}
 	// Person.create(events).exec( function (err, model)  {});

 	// events = {"name": "Workshop on Design for Sustainability",
 	// "shortDes": "Design green partnership agreement between Kyoto and Hong Kong",
 	// "fullDes": "Aspects to focus on   Design green partnership agreement between Kyoto and Hong Kong Ex. Low-carbon society, waste management, etc. Discover cultural differences Forcibly ideate green solutions using the cultural differences Extend the ideas by combining participants’ research topics",
 	// "image": "http://www.comp.hkbu.edu.hk/fieldinformatics/images/2015/poster.png",
 	// "organizer": "comp",
 	// "date": "2015-11-27",
 	// "time": "Afternoon",
 	// "venue": "RRS638",
 	// "quota": "20",
 	// "id": 3}
 	// Person.create(events).exec( function (err, model)  {});

 	// events = {"name": "FWD Challenge Award 2015 (Winter Challenge)",
 	// "shortDes": "In alignment of the theme of “Smarter Hong Kong, Smarter Living” from the Government’s 2014-2015 Budget and the Digital 21 Strategy, one of the initiatives is the release of government information for public consumption. Thus, Open Data access and its usage become important and crucial issues for driving Hong Kong to be a Smart City.",
 	// "fullDes": "In alignment of the theme of “Smarter Hong Kong, Smarter Living” from the Government’s 2014-2015 Budget and the Digital 21 Strategy, one of the initiatives is the release of government information for public consumption. Thus, Open Data access and its usage become important and crucial issues for driving Hong Kong to be a Smart City.  Currently, Public Sector Information available for free access covers real-time data such as road traffic information, geo-referenced public facility data, property market statistics, population census statistics, etc. Making good use of these available data should provide more opportunities for different sectors to improve their competitiveness. And thus, we pick the “Open Data Challenge” as the next challenge for the FWD Challenge Award 2015.",
 	// "image": "https://www.comp.hkbu.edu.hk/v1/pic/news/655.jpg",
 	// "organizer": "comp",
 	// "date": "2015-10-19",
 	// "time": "14:30",
 	// "venue": "RRS638", 
 	// "quota": "50",
 	// "id": 4}
 	// Person.create(events).exec( function (err, model)  {});


  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
