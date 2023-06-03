<template>
  <div>
    <div class="card mb-4" v-if="usuarios">
      <div class="card-body text-center">
        <img :src="usuarios.photo" alt="avatar" class="rounded-circle img-fluid" width="150">
        <h5>{{ usuarios.name }}</h5>
        <p >Ciudad: {{ usuarios.city }}</p>
        <p >Biografia: {{ usuarios.bio }}</p>
      </div>
    </div>
    <div v-else>Loading...</div>

    <div v-if="resenas">
      <h3>Reseñas creadas por {{ usuarios.name }}: {{ resenas.length }}</h3>
      <tabla-fotos :resenas="resenas" />
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
    const response = await cargarUsuario("647178286edc199bff73e81f");
    this.usuarios = response.user;
    this.resenas = response.reviews;


console.log(response.reviews[0].review)

  },
};
</script>