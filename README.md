# Wave Partial Deconstruction 

###Summary:

This app renders different graphs based on JSON data from the server.

###To run:

npm start


####Location of website:

If serving from your local machine, it will be at the usual:

http://localhost:PORT/

(Port defaults to 3000 if process.env.PORT not set)

####Or.. serving from our favorite web IDE, Cloud 9!

https://wave-partial-deconstruction-patmulvihill.c9users.io

###Testing 

To run the current suite of tests:

`mocha test/*`

To build new tests, naming convention is to add -spec to the end of the file name.

Use the default gulp task to automate running the tests while developing:

`gulp`

This will monitor for changes in the controllers/test folders and run tests when changed.

