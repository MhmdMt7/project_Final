// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:1337/api", // غير الرابط حسب Strapi backend عندك
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
