//Our includes required for starting a server
var path = require('path');
var express = require('express');
var router = express();

//Various other includes
//Morgan: reports on calls made to server
var morgan = require('morgan');
router.use(morgan(':method :url in :response-time ms status :status'))

//Set the port
router.set('port', (process.env.PORT || 3000));

//Point the server to serve files from the public directory
router.use('/', express.static(path.join(__dirname, '../public')));


//Testing controller
var controllers = require('../controllers/index')();
var wController = controllers.waves;
var data = wController.createGraphData();


router.get('api/graph', function(req, res){
    
    res.send('Hello!');
});



// fs = require('fs');
// fs.writeFile("data.json", JSON.stringify(data), function(err) {
//     if (err) {
//       return console.log(err);
//     }

//     console.log("The file was saved!");
// });



//Start er up
router.listen(router.get('port'), function() {
   console.log('Wave Deconstruction server started: http://localhost:' + router.get('port') + '/');
})