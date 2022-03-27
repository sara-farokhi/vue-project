import { createRouter, createWebHistory } from "vue-router";
// import App from "./App.vue";
import HomePage from "./components/pages/HomePage";
import PostPage from "./components/pages/PostPage";
import UsersPage from "./components/pages/UsersPage";
import PerUserInfo from "./components/users/PerUserInfo";
import PerPostInfo from "./components/posts/PerPostInfo";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostPage,
  },
  {
    path: "/post/:id",
    name: "post",
    component: PerPostInfo,
  },
  {
    path: "/users",
    name: "users",
    component: UsersPage,
  },
  {
    path: "/users/:id",
    name: "user",
    component: PerUserInfo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
