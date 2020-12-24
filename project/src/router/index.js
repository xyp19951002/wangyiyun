import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: import("../views/Home.vue"),
    children:[
      {
      path: "/",
      redirect: '/index'
      },
      {
        path: '/index',
          component: import("../views/Index.vue")
        },
      {
      path: '/mine',
        component: import("../views/Mine.vue")
      },
      {
        path: '/commu',
        component: import("../views/Commu.vue")
      }]
  },
  {
    path: '/about',
    component: import("../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
