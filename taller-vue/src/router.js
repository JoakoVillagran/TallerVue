import { createRouter, createWebHashHistory } from 'vue-router';

import DetallesProducto from './pages/Detalles-item.vue';

const routes =[

{
name: 'detalles-item',
path: '/detalles-item/:id',
component: DetallesProducto,
props: true,
},

];

const router = createRouter({

routes,
history: createWebHashHistory(),

});


export default router;