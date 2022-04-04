import { createStore } from "vuex";
import usersModule from "./modules/usersModule";

const store = createStore({
  modules: {
    usersModule,
  },
});
export default store;
