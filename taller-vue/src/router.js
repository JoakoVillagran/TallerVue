import { createRouter, createWebHashHistory } from 'vue-router';

import PerfilUsuario from "../src/pages/PerfilUsuario"
import DetallesItem from "../src/pages/Detalles-item"

const routes = [
    {
        name: 'perfil_usuario',
        path: '/perfil',
        component: PerfilUsuario,
    },
    {
        path:"/hola",
        component: DetallesItem
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;