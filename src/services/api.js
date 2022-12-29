import axios from "axios";

const { CURRENT_ENV } = process.env;

const BASE_URL = () => {
  if (CURRENT_ENV === "production") {
    return "https://auto-ogmo-api.up.railway.app/api";
  }
  if (CURRENT_ENV === "development") {
    return "https://auto-ogmo-api-dev.up.railway.app/api";
  }
  return "http://localhost:1234";
};

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
