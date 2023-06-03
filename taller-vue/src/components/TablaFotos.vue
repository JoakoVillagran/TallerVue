<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="objeto in objeto" :key="objeto.id">
            <td>
              <img :src="objeto.product.images[0]" width="100" height="100" />
            </td>
            <td>{{ objeto.product.name }}</td>
            <td>{{ objeto.review }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      objeto: {
        type: Array,
        required: true
      },
    }
  }
  </script>

  