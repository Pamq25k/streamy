import axios from "axios";

const streams = axios.create({
  baseURL: "http://localhost:3001/streams",
});

export default streams;
