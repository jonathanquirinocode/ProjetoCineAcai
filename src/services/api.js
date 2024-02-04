import axios from "axios";

//Base da URL:https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=231837a2d335b8ee1023da518f21db0d&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
