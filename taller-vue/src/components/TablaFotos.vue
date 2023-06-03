<template>
  <div v-if="resenas">
    <table class="table">
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
  
  <div v-if="usuarios">
    <table class="table">
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>
            <img :src="usuario.user.photo" width="100" height="100" />
          </td>
          <td>{{ usuario.user.name }}</td>
          <td>{{ usuario.review }}</td>
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
    usuarios: {
      type: Array
    }
  }
}
</script>