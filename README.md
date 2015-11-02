#eTect Pill Ingestion Survey WebApp

## Application Workflow

*      User logs into our web site.  The user logging in is presented with a list of studies to which they should have access. (users and passwords are set up locally for now)
*      The user selects the desired study as they may have access to multiple.  All data from this point forward is displayed based upon the “filter” of the study selected.
*      For phase 1, recall we are simply trying to enroll a subject into a clinical trial.  To that end, the following things must happen
**       Allow for entry of new patient data (see snapshot for relevant fields)
**      Link an available reader (note: available readers based on selected trial above) to the patient.  IMPORTANT NOTE: Because a reader can be lost and the phone receiving messages could change, this information must be modifiable, but historical data must be preserved.
**       Because a given study may have many groups, allow the subject to be placed in a specific group after being enrolled
**      Allow for entry of a start date and an end date for a subject's participation in the project.
**      Either in this phase or the next, allow the study coordinator to see a list of all subjects and their patterns of taking a pill


###MSSQL Integration
>	MongoDB is not secure enough for our purposes, so we have a new ORM to map calls to the client's SQL database. 

###Side Navigation Bar
> A sidebar directive has been added to every page after logging in for ease of access and better UI experience.

###New Views
>*	Subject Status  
>			Shows a subject's ID, group, reader ID, and status(complete, incomplete, or unverified). 
>* Subject Setup  
>			Assign a subject to a group, a reader, and input a phone number and a start and end date. This page also records ingestions times/dates.
>* Subject Selection  
>			Search for and select a specific subject in order to view or edit their information

###Standardized Header
> A consistent header has been added to every page for better UI look and feel.
