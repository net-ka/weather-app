import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const api = 'f7c1fddfc8e25ad4eb6f224be8db72e0';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind: undefined,
    description: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    let api_call;
    let data;

    if (city) {
      api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`);
      data = await api_call.json();
    }
    if (city && country) {
      api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api}&units=metric`);
      data = await api_call.json();
    }

    if (city && "name" in data) {
      const sunriseDate = new Date(data.sys.sunrise * 1000);
      let sunriseHour = sunriseDate.getHours();
      let sunriseMinutes = sunriseDate.getMinutes();

      if (sunriseHour < 10) {
        sunriseHour = '0' + sunriseHour;
      }

      if (sunriseMinutes < 10) {
        sunriseMinutes = '0' + sunriseMinutes;
      }

      const sunriseTime = sunriseHour + ':' + sunriseMinutes;

      const sunsetDate = new Date(data.sys.sunset * 1000)
      let sunsetHour = sunsetDate.getHours();
      let sunsetMinutes = sunsetDate.getMinutes();

      if (sunsetHour < 10) {
        sunsetHour = '0' + sunsetHour;
      }

      if (sunsetMinutes < 10) {
        sunsetMinutes = '0' + sunsetMinutes;
      }

      const sunsetTime = sunsetHour + ':' + sunsetMinutes;

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        sunrise: sunriseTime,
        sunset: sunsetTime,
        error: undefined
      });
    }
    if (!city) {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: 'Please enter the city value.'
      });
    }
    if (city && data.cod === '404') {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: 'Please enter the city name correctly.'
      });
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather {...this.state}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;