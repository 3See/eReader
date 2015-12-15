'use strict';

module.exports = function(app) {
    // Subject Routes
    var subjects = require('../controllers/subjects');

    /*
        Subject Routes
     */

    // Register New Subjects
    app.post('/subject/register', subjects.register);

    // Update Subject
    app.post('/subject/update', subjects.update);

    // GET subjects ID
    app.post('/subject/getSubjects', subjects.getSubjects);

    // GET all unassigned subjects
    app.post('/subject/unassignedSearch', subjects.unassignedSearch);

    // Enroll subjest in study
    app.post('/subject/enroll', subjects.enroll);

    // Get the full subject's information
    app.post('/subject/getfullsubject', subjects.getfullsubject);

    // Validate Our Subject
    app.param('subjectId', subjects.subject);
};

