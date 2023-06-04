<template>
  <div class="lista-producto">
    <h1 class="titulo">Lista de Productos</h1>
    <ul class="lista-item">
      <li v-for="product in products" :key="product">
        <div class="card" @click="irADetallesItem(product._id)">
          <p><strong>Nombre:</strong> {{ product.name }}</p>
          <p><strong>Descripción:</strong> {{ product.description }}</p>
          <p><strong>Fecha de publicación:</strong> {{ product.createdAt }}</p>
          <p><strong>Precio:</strong> ${{ product.price }}</p>
          <p><strong>Ciudad:</strong> {{ product.user.city }}</p>

          <p><img width="250" height="250" :src="product.images[0]" />
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
      products: [],

    };
  },
  async mounted() {
    const result = await fetchProducts();
    this.products = result;

  }, methods: {
    irADetallesItem(id) {
      this.$router.push(`/detalles-item/${id}`);
    }
  }
}
</script>
<style>
.titulo {
  text-align: center;
  font-family: "Arial", sans-serif;
}

.lista-item {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style-type: none;
}

.lista-producto .card {
  border: 1px solid #ccc;
  padding: 20px;
  display: flex;
  background-color: #F3F3F3;
}
</style>
  