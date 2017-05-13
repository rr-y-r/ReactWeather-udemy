import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

class Weather extends React.Component {

  static defaultProps = {
     city : 'initial city'
  }

  handleSearch = (location) => {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage : undefined
    });

    openWeatherMap.getTemp(location).then((temp) => {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, (e) => {
      that.setState({
        isLoading: false,
        errorMessage : e.message
      });
      // alert(errorMessage);
    })
  }

  constructor(props, defaultProps) {

    super(props, defaultProps);
    this.state = {
      isLoading: false
    };


  }

  render() {
    var {isLoading, temp, location, errorMessage} = this.state;

    var renderMessage = () => {
      if(isLoading){
        return <h3 className="text-center">Fetching weather..</h3>;
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    var renderError = () =>{
      if(errorMessage){
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
};


export default Weather;
