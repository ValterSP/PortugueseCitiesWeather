const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3000;

const citiesMap = new Map();
const apiKey = process.env.API_KEY;
const weatherCache = new Map();

app.use(cors( {origin: 'http://localhost:8080'} ));

citiesMap.set('leiria', 2267094);
citiesMap.set('lisboa', 2267056);
citiesMap.set('porto', 2735941);
citiesMap.set('faro', 2268337);
citiesMap.set('coimbra', 2740636);

const minutes = 30;
const milliseconds = minutes * 60 * 1000;

app.get('/api/weather/:city', (req, res) => {
    const city = req.params.city.toLowerCase();
    if (!citiesMap.has(city)) {
        res.status(404).send(`City ${city} not found`);
        return;
    }
    const cityId = citiesMap.get(city);
    if (weatherCache.has(cityId)) {
        const cachedWeather = weatherCache.get(cityId);
        if (cachedWeather.timestamp + milliseconds > Date.now()) {
            res.send(cachedWeather.data.list);
            return;
        }
    }
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}`)
        .then(response => {
            if (response.data.cod !== '200') {
                res.status(500).send(response.data.message);
                return;
            }
            response.data.list.forEach(element => {
                element.main.temp = Math.round(element.main.temp - 273.15);
                element.main.feels_like = Math.round(element.main.feels_like - 273.15);
                element.main.temp_min = Math.round(element.main.temp_min - 273.15);
                element.main.temp_max = Math.round(element.main.temp_max - 273.15);
                element.day = parseInt(new Date(element.dt * 1000).toLocaleDateString('pt-PT', {day: '2-digit'}));
                element.weekday = new Date(element.dt * 1000).toLocaleDateString('en-US', {weekday: 'long'});
                element.hour = new Date(element.dt * 1000).toLocaleString('pt-PT', {hour: '2-digit', minute: '2-digit', hour12: false});
                delete element.main.temp_kf;
            });
            weatherCache.set(cityId, {timestamp: Date.now(), data: response.data});
            res.send(response.data.list);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
