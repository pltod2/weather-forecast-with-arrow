# Project Description

* Appcelerator Arrow, OpenWeatherMap API, React

* react-cardstack, react-select, request, moment

* Cached data for Sofia, April 7th to April 11th

* A list with predefined cities to choose from to get real time data from OpenWeatherMap API


# How to Run It

* Register for APPID from OpenWeatherMap Service

> http://openweathermap.org/

* Generate arrow project to get credentials for the arrow API server

> appc new -t arrow

> for more see http://docs.appcelerator.com/platform/latest/#!/guide/Arrow_Quick_Start

* Fill config.js with the credentials

* Copy generated arrow conf folder in the root of this project

* npm i

* npm start

* open http://localhost:8080/index.html

> note that one can just open index.html statically and will see the final UI with the cached data. However it is only for Sofia, also no server interaction here only client side app with static data for single city.

# How To Develop

* npm run build-dev

* npm start

## Notes

* build.js is rebuilt on each application change thanks to watchify

* arrow make sure that the server is restarted on each change

# TODO

* Error Management

* Loader animation for smooth UI when waiting new data to be loaded

* Cache for all cities

* Adding weather icons to display dynamically based on the min/max temperature levels

* Code improvements
