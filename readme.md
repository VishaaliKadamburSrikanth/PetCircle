## Pets ##
## Team members
* Aravind Sundarrajan (B00824107)
* Karanbir Singh Gill (B00757467)
* Sai Charan Reddy Pullanna Gari (B00823341)
* Vishaali Kadambur Srikanth (B00821049)

## Pet Circle Application ##

*PetCircle is a unified application created to cater all the pet needs. Any individual will be able to create personalised pet profiles and, they can converse with other people based on their pet needs. Pet circle was developed to provide pet owner with variety of options to maintain their pet profile where they can find pet companion for themselves and find perfect matching partners for their pets based on their preferences. 
It also enables avid dog lovers to find other people who are willing to adopt pets and enjoy their leisure time with pets for playtime. Apart from this, any individual can use this application to post about the missing pets, search about pets for adoption and playtime in their locality.*


**Feature 1: Missing pets**

- The missing pets page will display all the list of pets that are missing, which are fetched from the MySQL database.
- On the initial loading of the page, the default selections are made and all the pets which are under the missing category will be fetched from the database. For this, **GET Request** is fired from the UI. 
- Also, the user will be able to provide the filter list of misisng pets based selections like type of breed, color and any particular description. Based on the selection obtained from the user, the missing pets will be filtered and displayed on the page. For this, **POST Request** is fired from the UI, which will contain the selections made by the user attached to the request body.
- The data is populated on card views in the UI with the image of the pet and its relavent details.
- The backend functionality and code implemented for this feature is available in **Missing.js** file.
    URL - `http://129.173.22.35:26677/missing-pets`
**Feature 2: Search Pets**

 - The search feature will display the list of pets.
 - This feature contains two search criteria
        - Category - uses `getCategories` endpoint
        - Breeds - uses  `getBreeds` endpoint
- Once the user selects either one of the filter criteria, and hits Apply button the pets related to the search conditions are displayed
- The backend functionality and code implemented for this feature is available in **search.js** file.
- Backend request routes

        - `getBreeds`       GET REQUEST      - Get All breeds
        
        - `getCategories`   GET REQUEST      - Get All Categories
        
        - `getPets`         POST REQUEST     - Takes a request body  and returns the list of pets for the given category and breed

    URL - `http://129.173.22.35:26677/match/search`
**Feature 3: User Management - Login, Registration**
 - The registration feature allows the user to  enroll him self to the pets-circle community.
 - The login feature allows the user to login using the email and password.
            - `login()` function in the `server.js` file handles this logic

    URL - `http://129.173.22.35:26677/login` 
          `http://129.173.22.35:26677/register`
          
**Feature 4: Find Partner**
 - This feature allows the user to find the partner for the pet.
 - User can use the search (feature 2 ) find  the list of pets in the portal using search criteria and can match that pet with any other pet
 -          - `matchPet()` function in the `searchController.js` creates a relationship between the pet and matched pet
 
    URL - You will have to find a partner using the search functionality by click Match button  to get into that screen

**Feature 4: Your Pets**
 - This feature displays the pets related to the logged in user 
   
    URL  - `http://129.173.22.35:26677/your-pets`

**Feature 5: Pet Deatils**
 - This feature allows the user to see the detailed information about the pet
 
    URL  - `http://129.173.22.35:26677/pet-deatils`

**Feature 6: Add New Pet**
 - This feature allows the logged in user to add a new pet
    
    URL -   `http://129.173.22.35:26677/postpet`

**Feature 7: Post about a missing pet / Adopting a pet, Pet for Playtime**
 - This feature allows the user to create a missing pet, adopting a pet or a pet for playtime
 
    URL -   `http://129.173.22.35:26677/post`


**Folder structure: Other common files used as apart of submission**
**Backend** 
- database 
    - dbconfig.js
- controller
    - appController.js
    - signincontroller.js
    - postpetsController.js
- routes 
    - Misisng.js
    - search.js 
    - post.js
    - signin.js
    - postpets.js
- approutes.js
- server.js
-
**Frontend**
- src (Subfolder1)
    - app (Subfolder2)
        - post (Subfolder3): post.component.html, post.component.scss, post.component.spec.ts,post.component.ts                                         - Feature 1
        - search(Subfolder4) search.comopnent.html, search.component.scss, search.component.spec.ts, search.component.ts                                - Feature 2
        - pets-list(Subfolder5) pets-list.component.html, pets-list.component.scss, pets-list.component.spec.ts, pets-list.ts, pets.details.model.ts    - Feature 2
        - petdetailslist: petdetailslist.component.html, petdetailslist.component.ts, petdetailslist.components.scss
        - post: post.component.ts,post.component.html, post.component.scss, post.service.ts
        - registration: registration.component.html, registration.component.ts, registration.component.sass
        - postpet: postpet.component.html, postpet.component.ts, postpet.component.sass
        - spinner: spinner.component.html, spinner.component.ts, spinner.component.scss - Utility to show Spinners for the background API calls
## Frameworks
- Client-Side languages
    - HTML 5, CSS, Bootstrap and Angular are used to develop and style the frontend design.
    
- Server-Side Technologies
    - Node.js
    
- Database
    - MySQL

## Installation instructions - Local
- Clone the git repository `https://git.cs.dal.ca/aravinds/pets-circle.git`
- **To run the backend**
    
    1.  navigate to the backend folder
    2.  In the `server.js` file make sure the following line is present
                
                port = process.env.PORT || 3000;
                
    
    3.  run `npm install`
    4.  run `npm start`
    5.  The backend will be running in the following URL `http://localhost:3000`
            
- **To run the frontend**
    
    1.  navigate to the frontend folder
    2.  In the `environment.ts` file make sure the following variable is available
        
                export const BASE_URL = {
                    BLUE_NOSE: 'http://localhost:3000'
                }
            
    3.  run `npm install`
    4.  run `ng serve -o --port=9999`
    5.  The application will be launched in `http://localhost:9999`
    
**Bluenose URL - `http://129.173.22.35:26677`**


## Note
- For frontend, the code used is W3 compliant which is already validated in assignment 2. 
- For backend, we have used nodejs.
   
## Refered Angular Libraries used
    - Primeng - https://www.primefaces.org/primeng/#/
            Components
                    - Slider
                    - Autocomplete
    - ngx-bootstrap -   https://valor-software.com/ngx-bootstrap/#/documentation
            Components
                    - Carousel
    - Angular Google Maps - https://angular-maps.com/guides/getting-started/ 
            Components
                    - Map component
    - Angular pagination - https://www.npmjs.com/package/ngx-pagination

## References

[1] Angular Documentation https://angular.io/guide/forms

[2] Images were taken from https://www.google.com/search?safe=active&tbm=isch&source=hp&biw=1504&bih=860&ei=DsvyXPHGOcqIggfa44rACg&q=dogs&oq=dogs&gs_l=img.3..35i39j0l9.1003.1343..1449...0.0..0.104.378.3j1......0....1..gws-wiz-img.....0.ioK9_Z_ueOk

[3] (n.d.). Retrieved July 17, 2019, from https://angular.io/guide/http

[4] (n.d.). Retrieved July 17, 2019, from https://angular.io/guide/httpNode js. (n.d.). Retrieved July 17, 2019, from https://www.w3schools.com/nodejs/nodejs_mysql.aspNode.js v12.6.0 Documentation.

[5] (n.d.). Retrieved from https://nodejs.org/api/http.html

[6] (n.d.). Ngx-pagination. (n.d.). Retrieved July 17, 2019, from https://www.npmjs.com/package/ngx-pagination