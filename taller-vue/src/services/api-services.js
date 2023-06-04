<<<<<<< HEAD
import axios from "axios";

const BASE_URL = 'http://ec2-54-163-208-73.compute-1.amazonaws.com:8080';


function cargarUsuario(id) {
  return axios
    .get(`${BASE_URL}/users/${id}/reviews`).then((result) => {
      return result.data;
    });
}

function getDetalles(id) {
  return axios.get(`${BASE_URL}/products/${id}/reviews`).then((result) => {
    return result.data;
  });
}
function fetchProducts() {
  return axios.get(`${BASE_URL}/products`).then((result) => {
    return result.data;
  });
}

export { cargarUsuario, getDetalles, fetchProducts };




=======
import axios from 'axios';

const BASE_URL = 'http://ec2-54-163-208-73.compute-1.amazonaws.com:8080';
>>>>>>> parent of d037e810 (haciendo de nuevo el main)
