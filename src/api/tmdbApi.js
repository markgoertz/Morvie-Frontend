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

        return axios(baseurl + type,
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
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    async detail(cate, id, params){
        const url = baseurl + category[cate] + '/'+ id ;
        try {
            return await axios(url,
                {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                    },
                    params: params
                });
        } catch (error) {
            throw error;
        }
    },
    credits: async (cate, id) => {
        const url = baseurl + "credits"+ "/" + category[cate] + '/' + id;
        try {
            return await axios(url,
                {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                    }
                });
        } catch (error) {
            throw error;
        }
    },
    similar: async (cate, id) => {
        const url = baseurl + category[cate] +'/similar' + "/"+ id;
        try {
            return await axios(url,
                {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                    }
                });
        } catch (error) {
            throw error;
        }
    },
    getFeeds: async (id) => { 
        const url = baseurl + 'feed/movie' + "/"+ id;
        try {
            return await axios(url,
                {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                    }
                });
        } catch (error) {
            throw error;
        }
    }
}

export default tmdbApi;