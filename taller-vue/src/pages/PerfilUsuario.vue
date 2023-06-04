<template>
  <div>
    <card-perfil :usuario="usuario" />

    <div v-if="resenas">
      <h3>Reseñas creadas por {{ usuario.name }}: {{ resenas.length }}</h3>
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
      usuario: [],
      resenas: [],
    };
  },
  async mounted() {
    const response = await cargarUsuario(this.id);
    this.usuario = response.user;
    this.resenas = response.reviews;
  },
};
</script>