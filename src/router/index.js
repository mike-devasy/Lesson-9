import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopList from '@/views/ShopList.vue'
import ProductPage from '@/views/ProductPage.vue'
import ContactsPage from '@/views/ContactsPage.vue'
import PaymentRules from '@/views/PaymentRules.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopList,
  },
  {
    path: "/payments",
    name: "payments",
    component: PaymentRules,
  },
  {
    path: "/category/:categoryId",
    name: "category",
    component: ProductPage,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsPage,
  },
  // {
    // path: "/about",
    // name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
      // import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
