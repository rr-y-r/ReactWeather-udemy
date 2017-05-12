import React from 'react';

class WeatherForm extends React.Component {

  onFormSubmit = (e) => {
    e.preventDefault();

    var location = this.refs.location.value;

    if(location){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="location" />
        </div>
        <div>
          <button>Get Weather</button>
        </div>
        </form>
      </div>
    );
  }
};

export default WeatherForm;
