<template>
    <div class="weather-widget">
      <h2>{{ weekday }}, {{ day }}</h2>
      <p>Hour: {{ hour }}</p>
      <p>Temperature: {{ temperature }}°C</p>
      <p>Feels Like: {{ feelsLike }}°C</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WeatherWidget',
    props: {
      temperature: Number,
      feelsLike: Number,
      tempMin: Number,
      tempMax: Number,
      day: Number,
      weekday: String,
      hour: String
    }
  };
  </script>
  
  <style scoped>
  .weather-widget {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  </style>
  