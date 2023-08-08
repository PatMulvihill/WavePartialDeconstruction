# Wave Partial Deconstruction

### Summary:

This app renders three waves in a d3.js grid. The first two waves are user-defined using amplitude and frequency inputs. The third is a construction or deconstruction of these two waves based on their interference.
I built this app to test out d3.js' graphing capabilities and to practice writing javascript.


### To run:

First, make sure everything is installed correctly:

`npm install`

Then these commands will pack the latest client code and start the server:

`gulp webpackClient`

`npm start`

If serving from your local machine, the application will be available at:

http://localhost:3000/


### Testing

To run the current suite of tests just run:

`npm test`

See the style guide below about adding tests.


### Webpack(ing!)

There are gulp tasks configured to make developing React out of the client directory easy:

* `gulp lintClient`: will run the client code through ES Lint.

* `gulp webpackClient`: will package the client code and place it into `public/bundle.js`.

* `gulp client`: (recommended) use this to watch for changes and run the above tasks when they occur!


### Style Guide
To build new tests, the naming convention is to add -spec to the end of the file name. Use `gulp tests` to automate the running of tests whenever a file changes in the test or controllers directories.
