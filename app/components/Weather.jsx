import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends React.Component {

  static defaultProps = {
     city : 'initial city'
  }

  handleSearch = (location) => {
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then((temp) => {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, (errorMessage) => {
      that.setState({isLoading: false});
      alert(errorMessage);
    })
  }

  constructor(props, defaultProps) {

    super(props, defaultProps);
    this.state = {
      isLoading: false
    };


  }

  render() {
    var {isLoading, temp,location} = this.state;

    var renderMessage = () => {
      if(isLoading){
        return <h3>Fetching weather..</h3>;
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
};


export default Weather;
