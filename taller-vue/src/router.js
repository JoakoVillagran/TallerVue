import { createRouter, createWebHashHistory } from 'vue-router';
import ProductosLista from './pages/ProductosLista';


const routes = [
    {
      name: 'productos_lista',
      path: '/productoslista',
      component: ProductosLista,
      props: true,
    }
  ];
  
  const router = createRouter({
    routes,
    history: createWebHashHistory(),
  });
  
  export default router;