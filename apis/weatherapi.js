var Arrow = require('arrow');
var request = require('request');
var request = require('request');
var credentials = require('../config');

var TestAPI = Arrow.API.extend({
	group: 'owmapi',
	path: '/api/owmapi/:city',
	method: 'GET',
	description: 'Open Weather Map API',
	after: 'post_weatherapi',
	parameters: {
		city: {description:'city name'}
	},
	action: function (req, resp, next) {
    console.log("Processing fetch request on the server...");
		console.log(req.params.city);
		var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q={" + req.params.city + "}&cnt={5}&APPID=" + credentials.APPID;
		var options = {
			"url": url,
      "method": "GET",
      "bodyParams": {},
      "gzip": true,
      "json": true
    };
    request(options, function (err, response, body) {
			resp.send(body);
			next();
    });

	}
});

module.exports = TestAPI;
