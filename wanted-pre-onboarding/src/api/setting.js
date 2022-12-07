import axios from "axios";

export const setting = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

setting.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");

  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});