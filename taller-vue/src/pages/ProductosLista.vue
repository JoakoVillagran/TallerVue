<template>
    <div>
    <h1>Lista de Productos</h1>
    <ul>
      <li v-for="product in products" :key="product">
        <div class="card">
        <p>Nombre:{{ product.name }}</p>
        <p>Descripcion:{{ product.description }}</p>
        <p>Fecha de publicacion:{{ product.createdAt }}</p>
        <p>Precio:${{ product.price }}</p>
        <p>Ciudad:{{ product.user.city }}</p>
        
        
        <p><img  :src="product.images" /> 
        </p>
      </div>
      </li>
    </ul>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: []
      };
    },
    created() {
      this.fetchProducts();
    },
    methods: {
      fetchProducts() {
        axios.get('http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/products')
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
  </script>
  