const express = require('express');
const app = express();
const port = 3000;

const citiesMap = new Map();

citiesMap.set('leiria', 2267094);
citiesMap.set('lisbon', 2267056);
citiesMap.set('porto', 2735941);
citiesMap.set('faro', 2268337);
citiesMap.set('coimbra', 2740636);

app.get('/api/weather/:city', (req, res) => {
    const city = req.params.city;
    if (!citiesMap.has(city)) {
        res.status(404).send(`City ${city} not found`);
        return;
    }
    res.send(`City is ${city}`);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
