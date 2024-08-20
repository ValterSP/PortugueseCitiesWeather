<template>
    <div>
      <h1>Weather Dashboard</h1>
      <p>Displaying weather information for {{ cityComputed }}</p>
    </div>
</template>

<script>
  export default {
    name: "CityWeather",
    props: ["city"],
    computed: {
      cityComputed() {
        return this.$route.params.city;
      }
    }
  };
</script>
  
  