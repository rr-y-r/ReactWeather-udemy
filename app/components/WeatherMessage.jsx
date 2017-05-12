import React from 'react';

// class WeatherMessage extends React.Component {
//   render() {
//     var {temp,location} = this.props;
//
//     return (
//       <div>
//         <h2>location : {location}</h2>
//         <h2>Temp : {temp}</h2>
//       </div>
//     );
//   }
// };

var WeatherMessage = ({temp,location}) => {
  return (
    <div>
      <h2>location : {location}</h2>
      <h2>Temp : {temp}</h2>
    </div>
  );
}

export default WeatherMessage;
