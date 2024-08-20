<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" style="padding: 0px; margin: 0px;" :to="{ name: 'Home' }">
        <img src="@/assets/weather_icon.png" alt="Weather Icon" class="navbar-icon" height="50px">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
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
  background-color: #1e90ff;
  padding: 5px;
}

.navbar .nav-link {
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  transition: color 0.3s ease-in-out;
}

.navbar .nav-link:hover {
  color: #ffd700;
}

body {
  background-color: #f0f4f8;
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
}
.navbar-toggler {
  background-color: #ffffff;
}
.navbar-toggler:hover{
  background-color: #ffd700;
}
.navbar-collapse .nav-link{
  text-align: center;
}
</style>
