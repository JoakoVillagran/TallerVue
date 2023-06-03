<template>
    <div>
      <table class="table">
        <tbody>
          <tr v-for="objeto in objeto" :key="objeto.id">
            <td>
                <img :src="objeto.user.photo" width="100" height="100" />
            </td>
            <td>{{ objeto.user.name }}</td>
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