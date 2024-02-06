"use client";

import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})


// Request interceptor
api.interceptors.request.use(
  (config) => {
    config.headers.Accept = "application/json"
    const accessToken = "3|HFTxXpnko3xw6JW1c2sa7LC4WAuYIMY7t3d7qZ6d89e51186"//JSON.parse(localStorage.getItem("token"))//window.localStorage.getItem("token");
    if (accessToken) {
      if (config.headers){
        config.headers.Authorization = "Bearer "+accessToken
      } 
    }
    else{
      window.location = '/sign-in'
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if(!error.response){
      // toast.error('Connection Error', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      // });
    }
    if(error.response?.status === 401) {
      window.location = '/sign-in'
    }
    return Promise.reject(error)
  }
)

export default api