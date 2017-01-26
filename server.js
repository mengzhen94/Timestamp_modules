var express = require('express')
var app = express()
var routes = require('./app/routes/index.js');
var api = require('./app/api/timestamp.js');

routes(app);
api(app);
var port = process.env.PORT || 8080; 
app.listen(port, function() {
    console.log("Timestamp App listening on port "+ port);
});




	







 


