const express = require('express');
const app = express();
const port = 3000;

app.get('/api/weather/:city', (req, res) => {
    const city = req.params.city;
    res.send(`City is ${city}`);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
