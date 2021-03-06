#eTect Pill Ingestion Survey WebApp

## Application Workflow

* User logs into our web site.  The user logging in is presented with a list of studies to which they should have access. (users and passwords are set up locally for now)
* The user selects the desired study as they may have access to multiple.  All data from this point forward is displayed based upon the “filter” of the study selected.
* For phase 1, recall we are simply trying to enroll a subject into a clinical trial.  To that end, the following things must happen
  * Allow for entry of new patient data (see snapshot for relevant fields)
  * Link an available reader (note: available readers based on selected trial above) to the patient.  IMPORTANT NOTE: Because a reader can be lost and the phone receiving messages could change, this information must be modifiable, but historical data must be preserved.
  * Because a given study may have many groups, allow the subject to be placed in a specific group after being enrolled
  * Allow for entry of a start date and an end date for a subject's participation in the project.
  * Either in this phase or the next, allow the study coordinator to see a list of all subjects and their patterns of taking a pill

##Features

###Enrollment of a new subject into a study. 
-The user should be able to add new users within his/her study and later place that subject in a group within that study.
![Alt text](public/img/readme/Enroll.jpg?raw=true)

###Overview of all the groups within a study and the study's general complience information
-Information about the groups within a study will be displayed numerically, as well as in two seperate charts.
![Alt text](public/img/readme/Study_overview.jpg?raw=true)

###Reports View
-This page displays all of the subjects within a group and their basic data, along with their ingestion times over the course of the study.
![Alt text](public/img/readme/Reports.jpg?raw=true)

###Search
-The user should be able to search through all the records they have access to to find a specific subject.
![Alt text](public/img/readme/Search.jpg?raw=true)


###MySQL Integration
>	Mean Stack Relational comes boxed with MySQL support with Sequelize included, we have added plugings for using sequelize-auto for model generation from the database and epilogue for easy rest endpoints for our models. MySQL server hosted by AWS.

###Side Navigation Bar
> A sidebar directive has been added to every page after logging in for ease of access and better UI experience.

###Views
>*	Subject Status  
>			Shows a subject's ID, group, reader ID, and status(complete, incomplete, or unverified). 
>* Subject Setup  
>			Assign a subject to a group, a reader, and input a phone number and a start and end date. This page also records ingestions times/dates.
>* Subject Selection  
>			Search for and select a specific subject in order to view or edit their information

###Standardized Header
> A consistent header has been added to every page for better UI look and feel.

## Running the Project
* Copy the git repository into the directory of your choice using "git clone (git repo link)"
* Run "npm install" in the main directory (you may have to run it twice to get it to install corectly.)
* After the database is ready, type "grunt" in the main folder.

## Updating the Database
* Place the developement.json5 file in the config/env folder to connect to the database.

## Resources Used
* Mean Stack Relational - https://github.com/jpotts18/mean-stack-relational
* Bootstrap - http://getbootstrap.com/