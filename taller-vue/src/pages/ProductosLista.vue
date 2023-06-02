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


          <p><img width="250" height="250" :src="product.images" />
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
  
<script>
import { fetchProducts } from '../services/api-services.js';


export default {
  data() {
    return {
      products: []
    };
  },
  async mounted() {
    const result = await fetchProducts();
    this.products = result;
  }
}
</script>
  