<template>
  <div>
    <h1 class="header">{{ cityComputed }} Weather</h1>
    <select v-model="selectedDay">
      <option 
        v-for="(item, index) in weekdayList" 
        :key="index" 
        :value="item">
        {{ item }} 
        <span v-if="item === today"> (Today)</span>
        <span v-else-if="item === tomorrow"> (Tomorrow)</span>
      </option>
    </select>
    <div v-if="filteredWeatherList.length">
      <div v-for="item in filteredWeatherList" :key="item.dt">
        <WeatherWidget 
          :temperature="item.main.temp" 
          :feelsLike="item.main.feels_like" 
          :day="item.day" 
          :weekday="item.weekday" 
          :hour="item.hour" 
        />
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
.header {
  text-align: center;
  margin-bottom: 20px;
}
</style>
