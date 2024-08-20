<template>
    <div class="home">
      <h1>Welcome to the Weather Dashboard</h1>
      <p>Select a city from the navbar to view the weather information.</p>
      <!-- You can add more content or widgets here for the home page -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppHome'
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 20px;
    background-color: #f0f4f8; /* Light background color for the home page */
    color: #333; /* Dark text color */
  }
  
  .home h1 {
    color: #1e90ff; /* Sky blue color for the header */
  }
  </style>
  