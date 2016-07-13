require('./app.css');
var React = require('react');
var ReactDOM = require('react-dom');
var request = require('request');
var Select = require('react-select');

import { CardStack, Card } from 'react-cardstack';
import { WeatherCard } from './weather-card';
import { cachedWeatherData } from './cache';
var credentials = require('../../config');

var options = [
    { value: 'Sofia', label: 'Sofia' },
    { value: 'Stockholm', label: 'Stockholm' },
    { value: 'Amsterdam', label: 'Amsterdam' },
    { value: 'London', label: 'London' },
    { value: 'Moscow', label: 'Moscow' },
    { value: 'Paris', label: 'Paris' }
];
var backgrounds = ['#FF9800', '#FF5722', '#8BC34A', '#03A9F4', '#009688'];

var App = React.createClass({
  getInitialState: function() {
    return {
      data: cachedWeatherData,
      expanded: false,
      selectedCity: "Sofia"
    };
  },
  toggle: function () {
    this.setState({
      expanded: !this.state.expanded
    })
  },

  selectCity: function(city) {
    this.loadData(city);
  },

  loadData: function(city = "Sofia") {
    console.log("Getting data for city: " + city);
    var that = this;
    var url = "http://127.0.0.1:8080/api/owmapi/" + city;
    var options = {
      "url": url,
      "method": "GET",
      "bodyParams": {},
      "auth": {
        "user": credentials.APIKEY,
        "password": ""
      },
      "gzip": true,
      "json": true
    };
    request(options, function (err, response, body) {
      that.setState({
        data: body.slice(0, 5),
        selectedCity: city
      })
    });
  },

  render: function() {
    var cards = [];
    var result;
    this.state.data.forEach(function(info, index) {
      cards.push(
        <Card background={backgrounds[index]} key={index}>
          <WeatherCard
            day={info[0]}
            max={info[1]}
            min={info[2]}
            expanded={this.state.expanded}
            />
        </Card>
      )
    }.bind(this))

    if (cards.length > 0) {
      result = <CardStack height={500} width={400} background='#f8f8f8' hoverOffset={25}>{cards}</CardStack>
    } else {
      result = <div>No Weather Information!</div>
    }

    return (
      <div>
        <h5>Appcelerator Arrow, OpenWeatherMap API, React</h5>
        <h5>react-cardstack, react-select, request, moment</h5>
        <h5>Cached data for Sofia, April 7th to April 11th.</h5>
        <h5>Choose a city from the dropdown for real time data.</h5>
        <Select
            name="form-field-name"
            value={this.state.selectedCity}
            options={options}
            onChange={this.selectCity}
            clearable={false}
        />
        <br/>
        <div onClick={this.toggle}>{result}</div>
      </div>
    );
  }

});


export function boot() {
  ReactDOM.render(< App />, document.getElementById('body'));
}
