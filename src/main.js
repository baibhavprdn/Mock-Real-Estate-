import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import axios from 'axios';

import '@vuikit/theme';

Vue.use(Vuikit);
Vue.use(VuikitIcons);
Vue.use(axios);

Vue.config.productionTip = false; 

Vue.prototype.$http=axios;

export const bus=new Vue({});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
