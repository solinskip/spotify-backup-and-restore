import axios from "axios";

const axiosSpotifyApi =  axios.create({
    baseURL: 'https://api.spotify.com/v1'
});

export default axiosSpotifyApi;