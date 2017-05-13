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
          <input type="search" ref="location" placeholder="Search weather by city"/>
        </div>
        <div>
          <button className="button expanded hollow">Get Weather</button>
        </div>
        </form>
      </div>
    );
  }
};

export default WeatherForm;
