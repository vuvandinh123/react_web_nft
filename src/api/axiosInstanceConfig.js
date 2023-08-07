import axios from "axios";
import { AppURL } from "./AppURL";
const axiosInstanceConfig = {
    baseURL :AppURL.BaseURL,
    headers: {
        accept: 'application/json',
        'X-API-KEY': AppURL.API_KEY
    }
}
export const axiosInstance = axios.create(axiosInstanceConfig);