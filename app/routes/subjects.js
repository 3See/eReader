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

    app.post('/subject/getSubjects', subjects.getSubjects);

    // Validate Our Subject
    app.param('subjectId', subjects.subject);
};

