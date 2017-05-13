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
      errorMessage : undefined,
      location : undefined,
      temp: undefined
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

  componentDidMount(){

    var params = new URLSearchParams(this.props.location.search);
    var getParams = params.get('location');
    // console.log(getParams);

    if(getParams && getParams.length > 0){
      this.handleSearch(getParams);
      window.location.hash = '#/';
    }
  }

  componentWillReceiveProps(){
    var params = new URLSearchParams(this.props.location.search);
    var getParams = params.get('location');

    if(getParams && getParams.length > 0){
      this.handleSearch(getParams);
      window.location.hash = '#/';
    }
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
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
};


export default Weather;
