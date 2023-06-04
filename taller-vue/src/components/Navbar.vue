<template>
  <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <span class="navbar-text">
        <h1 class="text-white">Tienda de Productos</h1>
      </span>
      <a href="/" class="btn btn-light text-purple" role="button">Ir a la página principal</a>
    </div>
  </nav>
</template>

<style>
.navbar-dark {
  background-color: purple !important;
}

.text-white {
  color: white !important;

}

.btn-light {
  background-color: white !important;

  color: purple !important;

}

.text-purple {
  color: purple !important;

}
</style>


<script>
export default {
  name: "NavBar",
};
</script>
