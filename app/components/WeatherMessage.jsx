import React from 'react';

var WeatherMessage = ({temp,location}) => {
  return (
    <div>
      <h2>location : {location}</h2>
      <h2>Temp : {temp}</h2>
    </div>
  );
}

export default WeatherMessage;
