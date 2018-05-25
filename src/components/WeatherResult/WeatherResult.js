import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';

const WeatherResult = ({weather}) => (
  <div className="container">
    {(() => {
              if (weather.length !== 0) {
                return (
                  <Fragment>
                    <h1>Results</h1>
                    <p>{weather.name}</p>
                    {console.log(weather.weather)}
                    {weather.weather.map(i => i.description)}
                  </Fragment>
                );
              }
    })()}
  </div>
  
);

// WeatherResult.propTypes = {
//   weather: PropTypes.shape({
//     weather: PropTypes.array.isRequired,
//   }),
// };

export default WeatherResult;
