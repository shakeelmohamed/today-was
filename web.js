var express = require('express'),
	jade = require('jade'),
	pg = require('pg'),
	app = express(),
    routes = require('./routes');

app.configure(function () {
    app.set('views', __dirname + '/jade');
    app.set('view engine', 'jade');
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

routes.init(app);
var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});