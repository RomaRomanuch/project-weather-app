export default {
    keyApi: '4155ac6d3fb539e9f841172aed94674f',
  
    getForecast(request) {
      const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
      const params = `?q=${request}&units=metric&appid=${this.keyApi}`;
      return fetch(baseUrl + params)
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => err)
    },
    };


