import { createStore } from 'vuex'
import Tutorial from './modules/Tutorial.module';

const store = createStore({
  modules: {
    Tutorial,
  }
});

export default store;