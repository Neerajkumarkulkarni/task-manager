import axios from "axios";

const api = axios.create({
  // please change this url
  baseURL: "http://localhost:5000/api/tasks",
});

api.interceptors.request.use((config) => {
  if (config.method === "delete") {
    config.headers["x-delete-auth"] = "ALLOW_DELETE";
  }
  return config;
});

export default api;