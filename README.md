# Wave Partial Deconstruction

###Summary:

This app renders graphs based on user input.


###To run:

First make sure everything is installed correctly:

`npm install`

Then these commands will pack the latest client code and start the server:

`npm pack`

`npm start`

If serving from your local machine, it will be at the usual:

http://localhost:PORT/

(Port defaults to 3000 if process.env.PORT not set)

#####Or.. serving from our favorite web IDE, Cloud 9!

https://workspace_name.c9users.io


###Testing

To run the current suite of tests with:

`npm test`


###Webpack(ing!)

There are a bunch of gulp tasks configured to make developing React out of the client directory easy. These

* `gulp lintClient`: will run the client code through ES Lint.

* `gulp webpackClient`: will package the client code and place it into `public/bundle.js`.

* `gulp client`: (recommended) use this to watch for changes and run the above tasks when they occur!


###Style Guide
To build new tests, naming convention is to add -spec to the end of the file name. Use `gulp watchForTests` to automate development testing, and run the tests on file changes in the test and controllers directories.
