<<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router';

import PerfilUsuario from "../src/pages/PerfilUsuario"
import DetallesItem from "../src/pages/Detalles-item"
import ProductosLista from "../src/pages/ProductosLista"

const routes = [
    {
        name: 'perfil_usuario',
        path: '/perfil/:id',
        component: PerfilUsuario,
        props:true
    },
    {
        path:"/detalles-item/:id",
        component: DetallesItem,
        props:true
    },
    {
        name: 'productos_lista',
        path: '/',
        component: ProductosLista,
        props: true,
      }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
=======
import { createRouter, createWebHashHistory } from 'vue-router';
>>>>>>> parent of d037e810 (haciendo de nuevo el main)
