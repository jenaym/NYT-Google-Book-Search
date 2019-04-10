# React Google Books Search

### Overview
- This is a React-based Google Books Search full stack application, utilizing Node.js, Express, and MongoDB(mongoose).
- The app consists of two main pages:
  1. Search books through Google Books
  2. Save and view saved book information
   
### Objectives
- Utilize React lifecycle methods to query and display books based on user searches.
- Make use of Node.js, Express and MongoDB by developing full stack web app.

### Deployment and Availability
- Heroku
  - Live app - https://shielded-wave-16938.herokuapp.com/
- GitHub
  - Repository - https://github.com/jenaym/NYT-Google-Book-Search

### Installation
- This full stack app can also be installed locally through the following steps:
  1. Clone the git repository
    `git clone https://github.com/jenaym/NYT-Google-Book-Search.git`
  2. Install necessary npm packages
    `npm install`
  3. MongoDB database
     - MongoDB server mongod needs to be up and running with all CRUD privileges.
     - `server.js` includes the default local setup
       - mongodb://localhost/googlebooks
  4. Models/Schema
    ```
    models
    ├── Book.js
    └── index.js
    ```
   5. Start the local development web server
    `npm start`

### Example / Demo
- The main page with search interface.

![alt](demo/demo&#32;1.png)

- Example search results with the search word "Game of Thrones"

![alt](demo/demo&#32;2.png)

- The `View` button will open the book information on a new tab at the external Google Books web site.

- Pressing the `Save` button of each article will save the article in the internal database.

The `Saved Books` button on the navbar on top shows all Saved books.

![alt](demo/demo&#32;3.png)

- Pressing the `Delete` button will remove the saved book entry from the internal database.

#### Written by Jenay McAuley