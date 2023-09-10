import axios from "axios";
import { store } from "..";


const baseUrl = import.meta.env.VITE_APP_BASE_API_URL;


let $api = axios.create({baseURL:baseUrl, headers: {
    'Content-Type': 'application/json',
},
})
$api.defaults.baseURL = baseUrl;

$api.interceptors.request.use((config) => {
	if (store.user.token!=null) {
		config.headers.Authorization = `Bearer ${store.user.token}`;
	}

	return config;
});
export default $api;