import { Layout } from "../constant";

import { RouteRecordRaw } from 'vue-router';

const router: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/home",
    // component: Layout,
  },
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    // meta: {
    //   auth: true
    // },
    children:[
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
    ]
  }, 
  {
    path: '/products',
    name: 'Products',
    component: Layout,
    children: [],
  }
]
export default router;