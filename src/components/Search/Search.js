import React, { Component, Fragment } from 'react';
import WeatherResult from '../WeatherResult/WeatherResult';
import Loader from '../Loader/Loader';
import './style.css';
import { API_KEY, URI } from '../../config';

class Search extends Component {
  state = {
    loading: false,
    notFound: false,
    weatherInfo: [],
  };

  weatherRef = React.createRef();

  getWeather = (e) => {
    
    //Data From text Input
    const INPUT_VALUE = this.weatherRef.current.value;

    this.setState({ loading: true }, () =>
      fetch(`${URI}${INPUT_VALUE}&APPID=${API_KEY}`)
        .then((res) => res.json())
        .then((weather) => {
          if(weather.cod === 200) {
            this.setState({ 
              weatherInfo: weather, 
              notFound: false,
              loading: false 
            });
          };
          if(weather.cod === "404") {
            this.setState({ 
              notFound: true,
              loading: false 
            });
          };
          //console.log(weather.cod)
        })
        .catch((error) => {
          console.error(error);
        }),
    );
    e.target.reset();
    e.preventDefault();
  };

  render() {
    const { weatherInfo, loading, notFound } = this.state;

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
        
        {loading ? <Loader /> : notFound ? <h2>Not found</h2> : <WeatherResult weather={weatherInfo} />}
      </Fragment>
    );
  }
}

export default Search;
