import React from 'react';

const Media = props => (
    <div>
        <div className='location-container' style={{ opacity: `${props.opacity}`}}>
            <p className='location-container__city'>{props.city}</p>
            <p className='location-container__country'>{props.country_full}</p>
        </div>
    </div>
);

export default Media;