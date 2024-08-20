<template>
    <div>
      <h1>Weather Dashboard</h1>
      <p>Displaying weather information for {{ cityComputed }}</p>
      <!-- Here you can add your logic to fetch and display weather data -->
    </div>
  </template>
  
  <script>
  export default {
    name: "CityWeather",
    props: ["city"],
    computed: {
      cityComputed() {
        return this.$route.params.city; // Extract city from route params
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  