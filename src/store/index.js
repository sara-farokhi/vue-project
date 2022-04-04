import { createStore } from "vuex";
import usersModule from "./modules/usersModule";
import postsModule from "./modules/postsModule";

const store = createStore({
  modules: {
    usersModule,
    postsModule,
  },
});
export default store;
