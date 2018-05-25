import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WeatherResult = ({ weather }) => (
  <div className="container">
    {console.log(weather)}
    {weather.length !== 0 ? (
      <Fragment>
        <Title>Results</Title>
        <Paragraph>Location: {weather.name}</Paragraph>
        <Paragraph>Temperature : {weather.main.temp}</Paragraph>
        <Paragraph>Description : {weather.weather[0].description}</Paragraph>
        <Paragraph>Wind Speed : {weather.wind.speed}</Paragraph>
      </Fragment>
    ) : (
      console.log(weather)
    )}
  </div>
);

export default WeatherResult;

WeatherResult.propTypes = {
  weather: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    temp: PropTypes.number,
    speed: PropTypes.number,
  }).isRequired,
};

const Paragraph = styled.p`
  font-size: 16px;
  color: #333;
  font-style: italic;
`;

const Title = styled.h1`
  font-weight: bolder;
  color: grey;
  text-transform: uppercase;
`;
