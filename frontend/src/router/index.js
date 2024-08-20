import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../views/AppHome.vue";
import CityWeather from "@/views/CityWeather.vue";

const routes = [
    {
        path : "/",
        name : "Home",
        component : AppHome
    },
    {
        path : "/weather/:city",
        name : "CityWeather",
        component : CityWeather,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;