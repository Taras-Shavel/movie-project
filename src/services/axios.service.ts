import axios from "axios";
import {baseURL} from "../constants";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFjNGYyOGQ4MTBmNGFiYzlmZTc2M2Q2YzJmMTQ5MCIsInN1YiI6IjY0NjBlNzZmZTNmYTJmMDBlNDAzNzA3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ow8wo241DBV1GxPmX0KT8_7d3kc0PPsA-y4EUZCFzxg'
    }
};

const axiosService = axios.create({baseURL, headers: options.headers});

export {
    axiosService
}