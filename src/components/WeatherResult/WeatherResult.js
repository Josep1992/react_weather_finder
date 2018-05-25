import React from 'react';
// import PropTypes from 'prop-types';

const WeatherResult = (props) => (
  <div className="container">
    <h1>Results</h1>
    <p>{props.weather.name}</p>
    {console.log(props)}
  </div>
);

// WeatherResult.propTypes = {
//   weather: PropTypes.shape({
//     weather: PropTypes.array.isRequired,
//   }),
// };

export default WeatherResult;
