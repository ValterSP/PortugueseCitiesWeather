<template>
  <div class="page-container">
    <div class="weather-container">
      <h1 class="header">{{ cityComputed }} Weather</h1>
      <select v-model="selectedDay" class="day-selector">
        <option 
          v-for="(item, index) in weekdayList" 
          :key="index" 
          :value="item">
          {{ item }} 
          <span v-if="item === today"> (Today)</span>
          <span v-else-if="item === tomorrow"> (Tomorrow)</span>
        </option>
      </select>
      <div class="temp-summary" v-if="filteredWeatherList.length">
        <p class="temp-text max-temp">Max: {{ maxTemp }}°C</p>
        <p class="temp-text min-temp">Min: {{ minTemp }}°C</p>
      </div>
      <div v-if="filteredWeatherList.length" class="weather-list">
        <div v-for="item in filteredWeatherList" :key="item.dt" class="weather-widget">
          <WeatherWidget 
            :temperature="item.main.temp" 
            :feelsLike="item.main.feels_like" 
            :day="item.day" 
            :weekday="item.weekday" 
            :hour="item.hour" 
            :humidity="item.main.humidity"
            :icon="item.weather[0].icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WeatherWidget from "@/components/WeatherWidget.vue";

export default {
  name: "CityWeather",
  props: ["city"],
  components: {
    WeatherWidget,
  },
  computed: {
    cityComputed() {
      return this.$route.params.city;
    },
    today() {
      const options = { weekday: 'long' };
      return new Date().toLocaleDateString('en-US', options);
    },
    tomorrow() {
      const options = { weekday: 'long' };
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toLocaleDateString('en-US', options);
    },
    maxTemp() {
      return this.filteredWeatherList.length ? Math.max(...this.filteredWeatherList.map(item => item.main.temp_max)) : 'N/A';
    },
    minTemp() {
      return this.filteredWeatherList.length ? Math.min(...this.filteredWeatherList.map(item => item.main.temp_min)) : 'N/A';
    }
  },
  data() {
    return {
      weatherList: [],           // Lista original com todos os dados
      filteredWeatherList: [],   // Lista filtrada para exibição
      weekdayList: [],           // Lista de dias da semana
      selectedDay: '',           // Dia selecionado no dropdown
    };
  },
  watch: {
    city: 'getWeather',
    selectedDay() {
      this.filterWeatherList();
    }
  },
  created() {
    this.getWeather();
  },
  methods: {
    async getWeather() {
      const response = await axios.get(
        `http://localhost:3000/api/weather/${this.city}`
      );
      this.weatherList = response.data.list;  // Armazena todos os dados recebidos
      this.weekdayList = response.data.uniqueWeekdays;
      
      // Define o dia selecionado como "Hoje"
      this.selectedDay = this.today;

      // Filtra a lista para mostrar apenas os dados de hoje inicialmente
      this.filterWeatherList();
    },
    filterWeatherList() {
      // Filtra a lista original para exibir apenas os dados correspondentes ao dia selecionado
      this.filteredWeatherList = this.weatherList.filter(item => item.weekday === this.selectedDay);
    }
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: linear-gradient(to right, #6dd5fa, #2980b9);
}

.weather-container {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px; 
  padding: 20px;
  width: 90vw;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
  overflow: hidden; 
}

.header {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: bold;
  color: #fff;
}

.day-selector {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1.2em;
  border-radius: 5px;
  border: none;
  background-color: #3498db;
  color: white;
  text-align: center;
}

.day-selector option {
  background-color: #2980b9;
  color: white;
}

.temp-summary {
  display: flex;
  justify-content: center;
  gap: 20px; /* Space between the temperatures */
  margin-bottom: 5px;
}

.temp-text {
  font-size: 1.1em;
  font-weight: bold;
  margin: 0; /* Remove default margin */
}

.max-temp {
  color: #e67e22;
  text-shadow: 1px 1px 1px rgb(18, 20, 26);
  font-weight: bold;
  font-size: 1.2em;
}

.min-temp {
  color: #bbf7ff;
  text-shadow: 1px 1px 1px rgb(18, 20, 26);
  font-weight: bold;
  font-size: 1.2em;
}
.weather-list {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 15px;
  padding: 5px 0;
}
</style>
