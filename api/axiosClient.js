import axios from "axios";
import Config from 'react-native-config';
import { parse, stringify } from 'qs';
import { v4 as uuidv4 } from 'uuid';
import { loginSuccess, loginFail } from "../redux/auth/auth.actions";

const axiosClient = axios.create({
    //baseURL: Config.FAKE_API_URL,
    baseURL: 'http://10.0.2.2:5000',
    paramsSerializer: { 
      encode: parse,
      serialize: stringify
    },
    timeout: 60000, // request timeout
});

// request interceptor
axiosClient.interceptors.request.use(async(config) => {
    const userToken = uuidv4();
    if(userToken) config.headers["Authorization"] = userToken;
    //console.log("request interceptor:", JSON.stringify(config));
    return config;
  }, (error) => {
    console.log("Error in request interceptor: "+error);
    return Promise.reject(error);
  }
);

// response interceptor
axiosClient.interceptors.response.use((response) => {
    //console.log("response interceptor:", JSON.stringify(response));
    //const user = response.data;
    const user = JSON.parse(response.request._response);
    const auth = response.config.credentials;
    const url = response.config.url;

    // if(response.status == 200) { //if user exists
    //   if(user[0].username === auth.username && user[0].password === auth.password) {
    //     console.log("user authenticated!");
    //     return response;
    //   }
    // } 
   // console.log({RESPONSE_INTERCEPTOR: response});

    return response;
  }, (error) => {
    console.log("Error in response interceptor: "+error);
    return Promise.reject(error);
  }
);


export default axiosClient;