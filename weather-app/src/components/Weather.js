import React from 'react';

const Weather = props => (
    <div className='weather__info'>
        { props.titleVisibile && <div className='title-container'>  
                                    <h1 className='title-container__title'>Your Weather App</h1>
                                    <p className='title-container__subtitle'>Check the weather anywhere anytime!</p>
                                </div>
        }

        { props.city && props.country && <p className='weather__key__title'>The Weather for You</p> }
        { props.city && props.country && <p className='weather__key'>Location: <span className='weather__value'> {props.city}, {props.country}</span></p> }
        { props.temperature && <p className='weather__key'>Temperature: <span className='weather__value'> {props.temperature}°C</span></p> }
        { props.humidity && <p className='weather__key'>Humidity: <span className='weather__value'> {props.humidity}%</span></p> }
        { props.wind && <p className='weather__key'>Wind: <span className='weather__value'> {props.wind} m/sec</span></p> }
        { props.description && <p className='weather__key'>Conditions: <span className='weather__value'> {props.description}</span></p> }
        { props.sunrise && <p className='weather__key'>Sunrise: <span className='weather__value'> {props.sunrise}</span></p> }
        { props.sunset && <p className='weather__key'>Sunset: <span className='weather__value'> {props.sunset}</span></p> }
        { props.error && <p className='weather__error'>{props.error}</p> }
    </div>
);

export default Weather;