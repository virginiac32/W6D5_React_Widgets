import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
    this.weatherAPI = this.weatherAPI.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.weatherAPI);
  }

  weatherAPI(pos) {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=8380a44bd752bb967ba6bed74166aa83`;
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState == XMLHttpRequest.DONE ) {
         if (request.status == 200) {
            const data = JSON.parse(request.responseText);
            this.setState({weather: data});
            console.log(data);
          }
        }
    };

    request.open("GET", url, true);
    request.send();
  }

  render () {
    let location = null;
    let tempF = null;
    if (this.state.weather) {
      location = this.state.weather.name;
      tempF = Number((this.state.weather.main.temp *(9/5) - 459.67).toFixed(2));
    } else {
      location = "";
      tempF = "";
    }
    return(
      <div>
      <h1>Weather</h1>
        <ul>
          <li>
            <span>Location: {location} </span>
          </li>
          <li>
            <span>Temperature: {tempF}°F </span>
          </li>
        </ul>
    </div>);
  }
}
