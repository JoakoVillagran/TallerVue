<template>
    <div>
        <div class="card mb-4" v-if="usuarios">
            <div class="card-body text-center">
                <img :src="usuarios.photo" alt="avatar" class="rounded-circle img-fluid" width="150">
                <h5>{{ usuarios.name }}</h5>
                <p>Ciudad: {{ usuarios.city }}</p>
                <p v-if="!mostrarBoton">Biografia: {{ usuarios.bio }}</p>
                <a v-if="mostrarBoton" :href="'/perfil/' + usuarios._id" class="btn btn-primary">Perfil</a>
                
            </div>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>
  
<script>
export default {
    props: {
        usuarios: {
            type: Object,

        },
        mostrarBoton: {
            type: Boolean
        }
    }
}
</script>