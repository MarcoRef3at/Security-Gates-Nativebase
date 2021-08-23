import axios from "axios";
const apiClient = axios.create({
  // baseURL: "http://192.168.1.99:5000/api/v2",
  baseURL: "http://20.20.1.21:8088/rnt?opr",
  headers: {
    // "content-type": "text/json",
    "Content-Type": "application/json;charset=utf-8",
  },
});

export default apiClient;
