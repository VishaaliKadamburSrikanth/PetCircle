## Assignment 4 ##
## Team members
* Aravind Sundarrajan (B00824107)
* Karanbir Singh Gill (B00757467)
* Sai Charan Reddy Pullanna Gari (B00823341)
* Vishaali Kadambur Srikanth (B00821049)

## Pet Circle Application ##

*PetCircle is a unified application created to cater all the pet needs. Any individual will be able to create personalised pet profiles and, they can converse with other people based on their pet needs. Pet circle was developed to provide pet owner with variety of options to maintain their pet profile where they can find pet companion for themselves and find perfect matching partners for their pets based on their preferences. 
It also enables avid dog lovers to find other people who are willing to adopt pets and enjoy their leisure time with pets for playtime. Apart from this, any individual can use this application to post about the missing pets, search about pets for adoption and playtime in their locality.*

**For Assignment 4 submission, we have developed 4 features which are listed below**

**Feature 1: Missing pets**
**Developer : Vishaali Kadambur Srikanth(B00821049)**
- The missing pets page will display all the list of pets that are missing, which are fetched from the MySQL database.
- On the initial loading of the page, the default selections are made and all the pets which are under the missing category will be fetched from the database. For this, **GET Request** is fired from the UI. 
- Also, the user will be able to provide the filter list of misisng pets based selections like type of breed, color and any particular description. Based on the selection obtained from the user, the missing pets will be filtered and displayed on the page. For this, **POST Request** is fired from the UI, which will contain the selections made by the user attached to the request body.
- The data is populated on card views in the UI with the image of the pet and its relavent details.
- The backend functionality and code implemented for this feature is available in **Missing.js** file.

**Feature 2:**

**Feature 3:**

**Feature 4:**

**Folder structure: Other common files used as apart of submission**
**Backend** 
- database 
    - dbconfig.js
- controller
    - appController.js
- routes 
    - Misisng.js (Feature 1)
    -  (Feature 2)
    -  (Feature 3)
    -  (Feature 4)
- approutes.js
- server.js
-
**Frontend**
- src (Subfolder1)
    - app (Subfolder2)
        - post (Subfolder3): post.component.html, post.component.scss, post.component.spec.ts,                           post.component.ts

## Frameworks
- Client-Side languages
    - HTML 5, CSS, Bootstrap and Angular are used to develop and style the frontend design.
    
- Server-Side Technologies
    - Node.js
    
- Database
    - MySQL

## Installation instructions

## Working instructions


## Note
- For frontend, the code used is W3 compliant which is already validated in assignment 2. 
- For backend, we have used nodejs.
   
## References