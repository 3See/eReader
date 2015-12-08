'use strict';


module.exports = function(app) {

	var study = require('../controllers/study');

    // Register New Subjects
    app.post('/study/getStudy', study.getStudy);
//  	app.post('/study/getStudy', function(req, res, next){
 		console.log('I recieved a GET REQUEST');
//  		res.json('working');
//  	});
//>>>>>>> c2a68df59b0a68346d9cbf5167c56ef896877cc8

    //app.post('/study/getStudy', study.getStudy);
  
    console.log('---------------GOT TO THE ROUTE------------');
    /*
    exports.getStudy = function(req, res, body) {
    	var obj = JSON.parse(body);
    	res.json(body);
    	console.log('------------GETTING THE CONSOLE LOG TO WORK---------');
    
	};
*/
    // Validate Our Subject
	//app.param('subjectId', subjects.subject);
};

