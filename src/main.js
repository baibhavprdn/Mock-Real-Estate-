import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import axios from 'axios';
import {Server} from 'miragejs';
import {store} from '@/store/store.js';

import '@vuikit/theme';

Vue.use(Vuikit);
Vue.use(VuikitIcons);
Vue.use(axios);

Vue.config.productionTip = false; 

// in order to use this.$http in all components
Vue.prototype.$http=axios;

const server = new Server({
  timing:500
});

//using miragejs to handle api calls
server.db.loadData({
  propertyList: [
    {
      Img: require("@/assets/property1.png"),
      title: "House with swimming pool for sale",
      location: "Imadol seetal height, 02 Lalitpur Nepal",
      price: 4500000,
      currency: "Nrs",
      agent: "Bir Bikram Shrestha",
      agentPhone: "+977 9851075136",
      adPostedDate: "7/5/2017",
      tags: ["For Sale", "House", "Bunglow"],
      favourite: false
    },
    {
      Img: require("@/assets/property2.png"),
      title: "Bunglow house in Bhaisipati for rent",
      location: "Bhaisipati, 02 Lalitpur Nepal",
      price: 150000,
      currency: "Nrs",
      agent: "Bir Bikram Shrestha",
      agentPhone: "+977 9851075136",
      adPostedDate: "7/5/2019",
      tags: ["For Rent", "House", "Bunglow"],
      favourite: false
    },
    {
      Img: require("@/assets/property3.png"),
      title: "Bunglow house with backyard for sale",
      location: "Bhaisipati, 02 Lalitpur Nepal",
      price: 45000000,
      currency: "Nrs",
      agent: "Ram Shrestha",
      agentPhone: "+977 9851075178",
      adPostedDate: "7/5/2019",
      tags: ["For Sale", "House", "Bunglow"],
      favourite: false
    },
    {
      Img: require("@/assets/property5.jpg"),
      title: "House with swimming pool for sale",
      location: "Imadol seetal height, 02 Lalitpur Nepal",
      price: 4500000,
      currency: "Nrs",
      agent: "Bir Bikram Shrestha",
      agentPhone: "+977 9851075136",
      adPostedDate: "7/5/2017",
      tags: ["For Sale", "House", "Bunglow"],
      favourite: false
    },
    {
      Img: require("@/assets/property6.jpg"),
      title: "Bunglow house in Bhaisipati for rent",
      location: "Bhaisipati, 02 Lalitpur Nepal",
      price: 150000,
      currency: "Nrs",
      agent: "Bir Bikram Shrestha",
      agentPhone: "+977 9851075136",
      adPostedDate: "7/5/2019",
      tags: ["For Rent", "House", "Bunglow"],
      favourite: false
    },
    {
      Img: require("@/assets/property4.jpg"),
      title: "Bunglow house with backyard for sale",
      location: "Bhaisipati, 02 Lalitpur Nepal",
      price: 45000000,
      currency: "Nrs",
      agent: "Ram Shrestha",
      agentPhone: "+977 9851075178",
      adPostedDate: "7/5/2019",
      tags: ["For Sale", "House", "Bunglow"],
      favourite: false
    }
  ]
});

server.get('/api/propertyList',(schema)=>{
  return schema.db.propertyList;
});

new Vue({
  router,
  //allows using store in all components
  store,
  render: h => h(App)
}).$mount('#app');
