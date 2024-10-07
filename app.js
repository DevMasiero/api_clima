const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5500;
const API_KEY = process.env.API_KEY;

app.use(express.static('public'));

app.get('/clima', async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: 'Informe o nome de uma cidade' });
    }

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
                lang: 'pt'
            }
        });

        const weatherData = response.data;
        const formattedData = {
            Cidade: weatherData.name,
            Pais: weatherData.sys.country,
            Temperatura: weatherData.main.temp.toFixed(1) + "°",
            Descrição: weatherData.weather[0].description,
            Umidade: weatherData.main.humidity + "%",
            VelocidadeDoAr: weatherData.wind.speed + "km/h",
            UltimaAtualizacao: new Date(weatherData.dt * 1000).toLocaleString(),
        };

        return res.json(formattedData);
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json({ error: error.response.data.message });
        }
        return res.status(500).json({ error: 'Erro ao buscar dados meteorológicos' });
    }
});

app.listen(PORT, () => {
    console.log(`Server sendo executado na porta ${PORT}`);
});