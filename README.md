# tech.notes Tech Blog Application
Simple Full Stack blog website focused on technology, web development, and software programming. Built using HTML (through Handlebars.js templates), CSS (and Bootstrap framework), JavaScript, Node.js (and node packages for Express.js API, Sequelize, PG), and a PostgreSQL database.

![GitHub license](https://img.shields.io/badge/License-MIT-brightgreen.svg)

## Description
This front-end, simple portfolio website was built using JavaScript and Node.js for both Front and Back End capabilities. The packages used in order to bridge that gap and get everything running in terms of the server, development environment, template handling/rendering engine, included the following: Express.js, Express-Handlebars, Sequelize, PG, and a few others which enabled. Additionally, a PostgreSQL database was created and this application connected to that for storing and retrieving data from that database. In terms of Front-End/HTML, a main Handlebars file was used; content was rendered onto this file through use of other Handlebars template files. The content was then displayed as separate "pages", accessed through Navigation links. The user is able to visit URLs that correspond to each of those templated pages through routes that were set up along with the server.

![Tech-Notes-Web-Design-Technology-Blog-Website-screenshot](https://github.com/apurificato/Tech-Blog/assets/161912493/4ac2c4fa-e1c2-41d9-9c13-d1885eb95e86)

## Project Structure
- /db
  - client.js
  - schema.sql
- /models
  - Blog.js
  - User.js
  - index.js
- /node_modules
- /public (folder where all of the site's images are saved)
    - /assets (folder containing all of the site's main JavaScript and CSS code)
        - /css
        - /js
        - /images
- /routes
  - blog_routes.js
  - user_routes.js
  - view_routes.js
  - index.js
- /views (contains all of the Handlebars templates files used for project)
  - /layouts
    - main.hbs (main file that has HTML Document structure and other Handlebars templates are referenced and rendered unto)
  - /partials (template partials files for Handlebars)
- .gitignore (file that lists other files to be ignored by Github when pushing to repository, such as /node_modules folder)
- package.json (file containing JSON npm dependencies and script commands)
- LICENSE (license used for this repository - MIT License)
- README (information file containing information about this specific project/application)

## Tools and Technologies Used in This Project
- Javascript
- HTML
- CSS
- PostgreSQL Database
- Node.js
- Node Modules (npms):
  - Express.js Server
  - Express-Handlebars.js Template Engine
  - Express Session
  - Sequelize
  - Connect Session Sequelize
  - PG & PG Hstore
  - Bcrypt
  - Dotenv
- VS Code platform used to code and build pages
- Github (website hosted and deployed on Github servers)
- Render Cloud Hosting (for building Postgres database and live deployment)

## How to Use
Upon a user visiting this live website, they will be able to see that the homepage welcomes then and scrolling down briefly displays a section where there have been blog posts that were posted to the site. Scrolling up to the site's header, the user will see navigation links directing them to login or learn about the site. If they click the login link, that will take them to a separate page where they can fill out form fields to login (if they are an existing user and have visited the site before). However, if they haven't created a username/account yet, there is another link on the page that will direct them to register. Upon visiting the register page, they will see another form enabling them to create an account and register with the site. The user is prompted to fill out the form fields for creating a username, using their email address, and creating a password. Upon clicking submission of the form, they will then be logged in and redirected to an account page that shows information exclusive to that user, such as their username and email and options to update or delete their account info. This page is hidden if a user is not logged in to the site.

Once logged in, the user also has another option available to visit a link in the navigation for creating a new blog post. Upon visiting that URL, they can then enter information in another set of form fields that includes a title and text content for their blog post. Upon filling out those fields and submission of the form, the post data will be stored in the database and then rendered unto the homepage of the site as an individual blog post card that contains the title, text content, and author who created the post. Every post that is created on the site will repeat this same process and render unto the homepage.

## Demo/Deployment
Live URL: https://tech-notes-he04.onrender.com/

## Contributions
Website built from start to finish by Anthony Purificato.

## Credits
Rutgers Coding Bootcamp provided support and some of the resources for this project.

## License
Website is available for public use, hosted on Github servers, utilizing an MIT License - see the LICENSE file for details.

![GitHub license](https://img.shields.io/badge/License-MIT-brightgreen.svg)
  
For more information on license please click the [Link](https://opensource.org/licenses/MIT)

## Questions
Check out my [GitHub](https://github.com/apurificato) 
  
For questions, reach out to me on [LinkedIn](https://www.linkedin.com/in/apurificato/)

[![My Skills](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/apurificato/)
