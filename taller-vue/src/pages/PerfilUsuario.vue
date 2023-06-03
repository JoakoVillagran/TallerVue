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
      <tabla-fotos :objeto="resenas" />
    </div>
  </div>
</template>

<script>
import { cargarUsuario } from "../services/api-services";
import TablaFotos from "@/components/TablaFotos.vue";


export default {
  components: {
    TablaFotos
  
  },
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
    const responce = await cargarUsuario("647178286edc199bff73e81e");
    this.usuarios = responce.user;
    this.resenas = responce.reviews;

   

    console.log(responce.reviews[0].user)
  },
};
</script>