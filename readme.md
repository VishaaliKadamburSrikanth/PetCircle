## Pet Circle Application ##

*PetCircle is a unified application created to cater all the pet needs. Any individual will be able to create personalised pet profiles and, they can converse with other people based on their pet needs. Pet circle was developed to provide pet owner with variety of options to maintain their pet profile where they can find pet companion for themselves and find perfect matching partners for their pets based on their preferences. 
It also enables avid dog lovers to find other people who are willing to adopt pets and enjoy their leisure time with pets for playtime. Apart from this, any individual can use this application to post about the missing pets, search about pets for adoption and playtime in their locality.*

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
