import { createRouter, createWebHashHistory } from 'vue-router';

import PerfilUsuario from "../src/pages/PerfilUsuario"

const routes = [
    {
        name: 'perfil_usuario',
        path: '/perfil',
        component: PerfilUsuario,
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;