<template>
    <div>
      <h1>Weather Dashboard</h1>
      <div v-if="weatherList.length">
        <div v-for="item in weatherList" :key="item.dt">
          <WeatherWidget :temperature="item.main.temp" :feelsLike="item.main.feels_like" :day="item.day" :weekday="item.weekday" :hour = "item.hour" />
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
    }
  },
  data() {
    return {
      weatherList: [],
    };
  },
  watch: {
    city: 'getWeather',
  },
  created() {
    this.getWeather();
  },
  methods: {
    async getWeather() {
      const response = await axios.get(
        `http://localhost:3000/api/weather/${this.city}`
      );
      this.weatherList = response.data;
      console.log(this.weatherList);
    },
  },
};
</script>
  
  