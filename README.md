Step 1:

To run this project locally, first run "npm install" to install all the dependencies in package.json. After that, run "node server.js" and navigate to localhost:8080.
Node web server listens to port 8080 on your local machine and responds to a get request by rendering index.html page, i.e. hello world.

Step 2:
available API service
HTTP Verb: GET
URL      : /api/userprofile/:input
Description : Return the passed in input
Exceptions: input param is null or white space

Step 3:
In this step, the structure of the app changed towards SPA. To run this project locally, after running npm install, copy angular, angular-route and angular-resource over to public/libs/.
To run tests against API, run "npm test" otherwise run "npm start"
