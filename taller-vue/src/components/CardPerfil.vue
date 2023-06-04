<template>
    <div>
        <div class="card mb-4" v-if="usuario">
            <div class="card-body text-center">
                <img :src="usuario.photo" alt="avatar" class="rounded-circle img-fluid" width="150">
                <h5>{{ usuario.name }}</h5>
                <p>Ciudad: {{ usuario.city }}</p>
                <p v-if="!mostrarBoton">Biografia: {{ usuario.bio }}</p>
                <a v-if="mostrarBoton" :href="'/perfil/' + usuario._id" class="btn btn-primary">Perfil</a>
                
            </div>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>
  
<script>
export default {
    props: {
        usuario: {
            type: Object,

        },
        mostrarBoton: {
            type: Boolean
        }
    }
}
</script>