import axios from "axios";

const BASE_URL = "http://ec2-54-163-208-73.compute-1.amazonaws.com:8080";

function fetchProducts() {
  return axios.get(`${BASE_URL}/products`).then((result) => {
    return result.data;
  });
}
export { fetchProducts };
