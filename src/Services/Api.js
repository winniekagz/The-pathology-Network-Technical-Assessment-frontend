
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:6700/api/v1",
    timeout: 30000,
});
export default instance

const responseBody = (response) => response.data;

export const requests = {
    get: (url, headers) => instance.get(url, headers).then(responseBody),
    delete: (url, headers) => instance.delete(url, headers).then(responseBody),
    post: (url, body, headers) => instance.post(url, body, headers).then(responseBody),
    put: (url, body, headers) => instance.put(url, body, headers).then(responseBody)
}