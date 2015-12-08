'use strict';


module.exports = function(app) {

	var study = require('../controllers/study.js');

    // Register New Subjects
    app.route('/study/getStudy').get(study.getStudy);

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

