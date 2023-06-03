<template>
  <div>
    <card-perfil :usuarios="usuarios" />

    <div v-if="resenas">
      <h3>Reseñas creadas por {{ usuarios.name }}: {{ resenas.length }}</h3>
      <tabla-fotos :resenas="resenas" :perfil=true />
    </div>
  </div>
</template>

<script>
import { cargarUsuario } from "../services/api-services";
import TablaFotos from "@/components/TablaFotos.vue";
import CardPerfil from "@/components/CardPerfil.vue";

export default {
  components: {
    TablaFotos,
    CardPerfil,

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
    const response = await cargarUsuario(this.id);
    this.usuarios = response.user;
    this.resenas = response.reviews;


  

  },
};
</script>