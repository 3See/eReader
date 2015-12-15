'use strict';



module.exports = function(app) {
	var study = require('../controllers/study');

    // Register New Subjects
    app.post('/study/getStudy', study.getStudy);

};