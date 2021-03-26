import Home from "@/views/Home";
import About from "@/views/About";
import Contact from "@/views/Contact";
import Invoices from "@/views/Invoices";

import { createRouter, createWebHashHistory } from "vue-router";

const customRoutes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "Contact",
    path: "/contact",
    component: Contact,
  },
  {
    name: "Invoices",
    path: "/invoices/:clientID",
    component: Invoices,
  },
];

const router = createRouter({
  routes: customRoutes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from) => {
  console.log("BeforeEach", to, from);
});

export default router;
