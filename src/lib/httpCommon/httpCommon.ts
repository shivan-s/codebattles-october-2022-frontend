import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://cados.up.railway.app",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
