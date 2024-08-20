<template>
  <div class="weather-widget">
    <h2>{{ weekday }}, {{ day }}</h2>
    <img :src="iconUrl" alt="Weather Icon" class="weather-icon">
    <p>Hour</p>
    <p class="value">{{ hour }}</p>
    <p>Temperature</p>
    <p class="value">{{ temperature }}°C</p>
    <p>Feels Like</p>
    <p class="value">{{ feelsLike }}°C</p>
    <p>Humidity</p>
    <p class="value">{{ humidity }}%</p>
  </div>
</template>

<script>
export default {
  name: 'WeatherWidget',
  props: {
    temperature: Number,
    feelsLike: Number,
    humidity: Number,
    icon: String,
    day: String,
    weekday: String,
    hour: String
  },
  computed: {
    iconUrl() {
      return `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
    }
  }
};
</script>

<style scoped>
.weather-widget {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 15px;
  border-radius: 10px;
  background: linear-gradient(135deg, #e0f7fa, #80deea);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.weather-widget:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.weather-icon {
  width: 80px;
  height: 80px;
  margin: 10px 0;
}

h2 {
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #00796b;
}

p {
  margin: 5px 0;
  font-size: 1.2em;
  font-weight: bold;
  color: #004d40;
  margin-bottom: 2px;
}

.value {
  font-size: 0.9em;
  margin-top: 0px
}
</style>
