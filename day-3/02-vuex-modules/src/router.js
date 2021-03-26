import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home";
import CategoryList from "@/views/Category/List";
import NewCategory from "@/views/Category/New";
import ProductList from "@/views/Product/List";
import NewProduct from "@/views/Product/New";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: Home
  },
  {
    name: "CategoryList",
    path: "/categories",
    component: CategoryList
  },
  {
    name: "NewCategory",
    path: "/category/new",
    component: NewCategory
  },
  {
    name: "ProductList",
    path: "/products",
    component: ProductList
  },
  {
    name: "NewProduct",
    path: "/product/new",
    component: NewProduct
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
