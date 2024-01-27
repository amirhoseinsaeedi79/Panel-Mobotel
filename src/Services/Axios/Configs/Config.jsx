import axios from "axios";

const ApiRequest = axios.create({
  baseURL: "  https://mobo-server.liara.run/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiRequest