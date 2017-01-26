var express = require('express')
var app = express()
var routes = require('./app/routes/index.js');
var api = require('./app/api/timestamp.js');

routes(app);
api(app);

app.listen(8080, function() {
    console.log("Timestamp App listening on port "+ 8080);
});




	







 


