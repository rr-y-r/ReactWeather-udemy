import React from 'react';

var WeatherMessage = ({temp,location}) => {
  return (
    <div>
      <h2 className="text-center">location : {location}</h2>
      <h2 className="text-center">Temp : {temp}</h2>
    </div>
  );
}

export default WeatherMessage;
