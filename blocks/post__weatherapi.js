var Arrow = require('arrow');
var moment = require('moment');

function convertTime(time) {
	return moment.unix(time).format("dddd, MMMM Do YYYY");
}

var kelvinDifference = 273.15;

var PostBlock = Arrow.Block.extend({
	name: 'post_weatherapi',
	description: 'Post processing of weather data',

	action: function (req, resp, next) {
		req.log.info("Post Weather API Block executed");
		var statistic = JSON.parse(resp.body);
		var res = statistic.list.reduce(function (previous, current, index) {
				previous.push([convertTime(current.dt), Math.round(current.temp.max - kelvinDifference), Math.round(current.temp.min - kelvinDifference)]);
				return previous;
		}, [])

		resp.send(res);

		next();
	}
});

module.exports = PostBlock;
