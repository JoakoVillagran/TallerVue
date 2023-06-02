<template>
    <div v-if="item.product && imgs">
        <div class="card" style="width: 18rem;">
            <div class="card-header">{{ item.product.createdAt }}
  </div>
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div v-for="img in imgs" :key="img.index">
    <div  class="carousel-item active">
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
  </div>
  <div >
    <strong>{{item.product.price}}</strong>
  </div>
</div>

<div>


    <div class="card" style="width: 18rem;">
  <img :src="item.product.user.photo" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ item.product.user.name }}</h5>
    <p class="card-text">{{ item.product.user.city }}</p>
    <a href="/perfil" class="btn btn-primary">Perfil</a>
  </div>
</div>

</div>



</div>
</template>

<script>
import { getDetalles } from "../services/api-services";
export default {
  name: "DetallesItem",
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      item: [],
      imgs:[],
    
    };
  },
  async mounted() {

    const result = await getDetalles(this.id);
    this.item = result;
    this.imgs = result.product.images;
    console.log(result.review);
  },
};
</script>

<style>
strong {
 color: green;
 font-size: 50px;
}
h5 strong {
 color: black;
 font-size: 30px;
}
</style>