<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'CityWeather', params: { city: 'Leiria' } }"
            >Leiria</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'CityWeather', params: { city: 'Lisboa' } }"
            >Lisboa</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'CityWeather', params: { city: 'Coimbra' } }"
            >Coimbra</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'CityWeather', params: { city: 'Porto' } }"
            >Porto</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'CityWeather', params: { city: 'Faro' } }"
            >Faro</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style scoped>
.navbar {
  background-color: #1e90ff; /* Sky blue background */
  padding: 5px;
}

.navbar .nav-link {
  color: #ffffff; /* White text */
  font-weight: bold;
  font-size: 18px;
  transition: color 0.3s ease-in-out;
}

.navbar .nav-link:hover {
  color: #ffd700; /* Gold color on hover, symbolizing the sun */
}

body {
  background-color: #f0f4f8; /* Light sky blue for the page background */
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
}
</style>
