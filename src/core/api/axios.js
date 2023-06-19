import axios from 'axios';

export const PIZZAS_URL = 'https://63e3759b65ae4931770f5b26.mockapi.io/'

export const PIZZAS_API = axios.create({
    baseURL: PIZZAS_URL
})