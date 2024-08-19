const express = require('express');
require('dotenv').config();
const axios = require('axios');
const app = express();
const port = 3000;

const citiesMap = new Map();
const apiKey = process.env.API_KEY;

citiesMap.set('leiria', 2267094);
citiesMap.set('lisbon', 2267056);
citiesMap.set('porto', 2735941);
citiesMap.set('faro', 2268337);
citiesMap.set('coimbra', 2740636);

app.get('/api/weather/:city', (req, res) => {
    const city = req.params.city.toLowerCase();
    if (!citiesMap.has(city)) {
        res.status(404).send(`City ${city} not found`);
        return;
    }
    const cityId = citiesMap.get(city);
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
