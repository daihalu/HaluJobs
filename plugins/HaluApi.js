import axios from 'axios';
import Cookies from 'js-cookie';
import env from '../configs/Environment';

let axiosInstance = axios.create({
  baseURL: env.APIs
});

if(process.browser) {
  axiosInstance.defaults.headers.common['hostname']      = window.location.host;
  axiosInstance.defaults.headers.common['sso_token']     = Cookies.get('sso_token');
  axiosInstance.defaults.headers.common['refresh_token'] = Cookies.get('refresh_token');
}
export default ({req}, inject) => {
  inject('api', axiosInstance);
}
