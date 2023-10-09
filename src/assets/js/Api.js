import axios from "axios";
let Api = axios.create({
  // baseURL: "live-url/api",
  baseURL: "http://localhost:8000/api",
});

export default Api;
