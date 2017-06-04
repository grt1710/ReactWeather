var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=d83f3e7ee9002bab7ce3887541dfb5f6&units=metric';

module.exports = {
  getTemp : function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        return res.data.list[0].main.temp;
      } else {
        throw new Error(res.data.message);
      }
    }, function(err) {
    //  throw new Error(err.response.data.message);
      throw new Error("unable to fetch weather for that location");
    });
  }
};
