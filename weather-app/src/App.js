import React from 'react';
import "./App.css";
import { countries } from 'country-data';

import Media from './components/Media';
import Form from './components/Form';
import Weather from './components/Weather';

const api = 'f7c1fddfc8e25ad4eb6f224be8db72e0';
const api_photo = '1f58255b5a31b6ff84cf63304d9e5ff36f42369cc7d83579e07d7fa98ef48edb';
const start_photo ='https://images.unsplash.com/photo-1541251680333-ae8ae4c943af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    country_full: undefined,
    humidity: undefined,
    wind: undefined,
    description: undefined,
    sunrise: undefined,
    sunset: undefined,
    photo: start_photo,
    opacity: 0,
    titleVisibile: true,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    let api_call;
    let data;
    // let photo_url;

    if (city) {
      api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`);
      data = await api_call.json();
    }
    if (city && country) {
      api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api}&units=metric`);
      data = await api_call.json();
    }

    if (city && "name" in data) {
      const api_photo_call = await fetch(`https://api.unsplash.com/search/photos/?client_id=${api_photo}&page=1&query=${city}-${country}`);
      const data_photo = await api_photo_call.json();
      const photo_url = data_photo.results[0].urls.full;

      const timeDif = data.timezone / 3600;
      const sunriseDate = new Date(data.sys.sunrise * 1000);
      let sunriseHour = sunriseDate.getUTCHours() + timeDif;
      if (sunriseHour > 24) {
        sunriseHour = timeDif - (24 - sunriseDate.getUTCHours());
      }
      let sunriseMinutes = sunriseDate.getUTCMinutes();

      if (sunriseHour < 10) {
        sunriseHour = '0' + sunriseHour;
      }

      if (sunriseMinutes < 10) {
        sunriseMinutes = '0' + sunriseMinutes;
      }

      const sunriseTime = sunriseHour + ':' + sunriseMinutes;

      const sunsetDate = new Date(data.sys.sunset * 1000)
      let sunsetHour = sunsetDate.getUTCHours() + timeDif;
      if (sunsetHour <= 0) {
        sunsetHour = timeDif + (24 + sunsetHour.getUTCHours());
      }
      let sunsetMinutes = sunsetDate.getUTCMinutes();

      if (sunsetHour < 10) {
        sunsetHour = '0' + sunsetHour;
      }

      if (sunsetMinutes < 10) {
        sunsetMinutes = '0' + sunsetMinutes;
      }

      const sunsetTime = sunsetHour + ':' + sunsetMinutes;

      const country_name = countries[data.sys.country].name;

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        country_full: country_name,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        sunrise: sunriseTime,
        sunset: sunsetTime,
        photo: photo_url,
        opacity: 0.7,
        titleVisibile: false,
        error: undefined
      });
    }
    if (!city) {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        country_full: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        sunrise: undefined,
        sunset: undefined,
        photo: start_photo,
        opacity: 0,
        titleVisibile: false,
        error: 'Please enter the city value.'
      });
    }
    if (city && data.cod === '404') {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        country_full: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        sunrise: undefined,
        sunset: undefined,
        photo: start_photo,
        opacity: 0,
        titleVisibile: false,
        error: 'Please enter the city (country) name correctly.'
      });
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="dyn-1"></div>
          <div className="dyn-2"></div>
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 form-container">
                  <Form getWeather={this.getWeather} />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 media-container" style={{ background: `url(${this.state.photo}) center center no-repeat`}}>
                  <Media {...this.state} />
                </div>
                <div className="col-xs-6 weather-container">
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