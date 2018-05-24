import React, { Component, Fragment } from 'react';
import WeatherResult from '../WeatherResult/WeatherResult';
import Loader from '../Loader/Loader';
import './style.css';
import { config } from '../../config';

class Search extends Component {
  state = {
    loading: false,
    weatherInfo: [],
  };

  weatherRef = React.createRef();

  getWeather = (e) => {
    //EndPoint
    const URI = 'http://api.openweathermap.org/data/2.5/weather?q=';

    //Data From text Input
    const INPUT_VALUE = this.weatherRef.current.value;

    this.setState({ loading: true }, () =>
      fetch(`${URI}${INPUT_VALUE}&APPID=${config.API_KEY}`)
        .then((res) => res.json())
        .then((weather) =>
          this.setState({ weatherInfo: weather, loading: false }),
        )
        .catch((error) => {
          console.log(error);
        }),
    );
    e.target.reset();
    e.preventDefault();
  };

  render() {
    const { weatherInfo, loading } = this.state;

    return (
      <Fragment>
        <form onSubmit={this.getWeather}>
          <input
            type="text"
            placeholder="Enter City"
            ref={this.weatherRef}
            autoFocus={true}
          />
        </form>
        {loading ? <Loader /> : <WeatherResult weather={weatherInfo} />}
      </Fragment>
    );
  }
}

export default Search;
