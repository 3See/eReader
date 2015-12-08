'use strict';



module.exports = function(app) {
	var study = require('../controllers/study');

    // Register New Subjects
    app.post('/study/getStudy', study.getStudy);
//  	app.post('/study/getStudy', function(req, res, next){
 		console.log('I recieved a GET REQUEST');
//  		res.json('working');
//  	});

    // Validate Our Subject
	//app.param('subjectId', subjects.subject);
};

