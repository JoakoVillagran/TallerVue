<template>
    <div>
      <table class="table">
        <tbody>
          <tr v-for="resena in resenas" :key="resena.id">
            <td v-if="perfil"><img :src="resena.product.images[0]" width="100" height="100" /></td>
            <td v-else><img :src="resena.user.photo" width="100" height="100" /></td>
            <td v-if="perfil">{{ resena.product.name }}</td>
            <td v-else>{{ resena.user.name }}</td>
            <td>{{ resena.review }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  
  
  </template>
  
  <script>
  export default {
    props: {
      resenas: {
        type: Array,
      },
      perfil: {
        type: Boolean
      }
    }
  }
  </script>