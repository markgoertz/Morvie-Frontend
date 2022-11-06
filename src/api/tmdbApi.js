import apiConfig from "./apiConfig";
import axiosClient from "./axiosClient";
import axios from "axios";

const baseurl = apiConfig.baseUrl;
const apikey = apiConfig.apiKey;

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    async getMoviesList(type, params) {
        const url = baseurl + `movie/` + type +`?api_key=` + apikey;
        return axios(url,
            {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
                params: params
            }) 
        .catch(error => {
          throw error;
        })
    },


    getTvList(type, params) {
        const url = baseurl + `tv/` + type +`?api_key=` + apikey;
        return axios(url,
            {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
                params: params
            }) 
        .catch(error => {
          throw error;
        })
    },
    getVideos(cate, id){
        const url = baseurl + category[cate] + '/' + id + '/videos'+`?api_key=` + apikey;
        return axios(url,
            {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            }) 
        .catch(error => {
          throw error;
        })
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail(cate, id, params){
        const url = baseurl + category[cate] + '/' + id + `?api_key=` + apikey;
        return axios(url,
            {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
                params: params
            }) 
        .catch(error => {
          throw error;
        })
    },
    credits: (cate, id) => {
        const url = baseurl + category[cate] + '/' + id + '/credits' + `?api_key=` + apikey;
        return axios(url,
            {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            }) 
        .catch(error => {
          throw error;
        })
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
}

export default tmdbApi;