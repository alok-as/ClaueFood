import axios from "axios";
import config from "./config";

const instance = axios.create({
	baseURL: `${config.serverURL}:${config.port}/api`,
});

export default instance;
