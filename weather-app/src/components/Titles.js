import React from 'react';

const Titles = props => (
    <div>
        <h1 className='title-container__title'>{props.title}</h1>
        <p className='title-container__subtitle'>{props.subtitle}</p> 
        <div className='location-container' style={{ opacity: `${props.opacity}`}}>
            <p className='location-container__city'>{props.city}</p>
            <p className='location-container__country'>{props.country_full}</p>
        </div>
    </div>
);

export default Titles;