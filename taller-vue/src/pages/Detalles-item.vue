<template>
  <div v-if="item.product && imgs">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div id="div-prod" class="card" style="width: 18rem;">
            <div class="card-header">{{ item.product.createdAt }}</div>
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div v-for="img in imgs" :key="img.index">
                  <div class="carousel-item active">
                    <img :src="img" class="d-block w-100" alt="...">
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="card-body">
              <h5 class="card-title"><strong>{{ item.product.name }}</strong></h5>
              <p class="card-text">{{ item.product.description }}</p>
              <strong>{{ item.product.price }}</strong>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <card-perfil :usuario="usuario" :mostrarBoton="true" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div>
    <tabla-fotos :resenas="reviews" />


  </div>
</template>

<script>
import { getDetalles } from "../services/api-services";
import TablaFotos from "../components/TablaFotos.vue";
import CardPerfil from "../components/CardPerfil.vue"
export default {
  name: "DetallesItem",
  components: {
    TablaFotos,
    CardPerfil,

  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      item: [],
      imgs: [],
      reviews: [],
      usuario: [],


    };
  },
  async mounted() {

    const result = await getDetalles(this.id);
    this.item = result;
    this.imgs = result.product.images;
    this.reviews = result.reviews;
    this.usuario = result.product.user;
  },
};
</script>

<style>
strong {
  color: green;
  font-size: 20px;
}

h5 strong {
  color: black;
  font-size: 30px;
}

#div-prod {
  margin-left: 150px;
}

#div-card {
  margin-left: 1000px;
}
</style>
