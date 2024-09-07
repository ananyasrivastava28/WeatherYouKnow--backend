const express = require('express');
const axios = require('axios');

const Router = express.Router();

Router.get('/:city', async (req, res) => {
    const city = req.params.city;
    const apiKey = '29b68d17b38f46d599eff9cfd0b42be8'; 
    console.log('apicalll!!')
  
    const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;
  
    try {
      const response = await axios.get(url); 
      const weatherData = response.data; 
      // console.log(weatherData);
      const description = weatherData.data[0].weather.description;
      const cityName = weatherData.data[0].city_name;
      const countryCode = weatherData.data[0].country_code;
      const timeZone = weatherData.data[0].timezone;
      const dateTime = weatherData.data[0].ob_time;
      const weatherCode = weatherData.data[0].weather.code;

      const weatherInfo = {
        description,
        cityName,
        countryCode,
        timeZone,
        dateTime,
        weatherCode,
      };
  
      res.json(weatherInfo); 
    } catch (error) {
      console.error('Error fetching weather:', error.message);
      res.status(500).send('Error retrieving weather data'); 
    }
  });

module.exports = Router;