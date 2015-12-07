'use strict';


module.exports = function(app) {

	var study = require('../controllers/study');

    // Register New Subjects
    app.get('/study/getStudy', study.getStudy);
  

    // Validate Our Subject
	//app.param('subjectId', subjects.subject);
};

