<template>
  <div>
    <div v-if="usuarios">
      <h1>Usuario</h1>
      <div><img :src="usuarios.photo" width="150" height="150" /></div>
      <div>Nombre: {{ usuarios.name }}</div>
      <div>Ciudad: {{ usuarios.city }}</div>
      <div>Biografia: {{ usuarios.bio }}</div>
      
    </div>
    <div v-else>Loading...</div>

    <div v-if="resenas">
      <h3>Reseñas creadas por {{ usuarios.name }}: {{ resenas.length }}</h3>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="resena in resenas" :key="resena.id">
            <td>
              <img :src="resena.product.images[0]" width="100" height="100" />
            </td>
            <td>{{ resena.product.name }}</td>
            <td>{{ resena.review }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { cargarUsuario } from "../services/api-services";

export default {
  props: {
    id: {
      default: "",
    },
  },
  data() {
    return {
      usuarios: [],
      resenas: [],
    };
  },
  async mounted() {
    const responce = await cargarUsuario("647178286edc199bff73e81f");
    this.usuarios = responce.user;
    this.resenas = responce.reviews;
  },
};
</script>

<style>
</style>