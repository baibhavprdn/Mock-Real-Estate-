import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import axios from 'axios';
import { Server } from 'miragejs';
import { store } from '@/store/store.js';

import '@vuikit/theme';

import 'uikit/dist/css/uikit.min.css';

Vue.use(Vuikit);
Vue.use(VuikitIcons);
Vue.use(axios);

UIkit.use(Icons);

Vue.config.productionTip = false;

// in order to use this.$http in all components
Vue.prototype.$http = axios;

const server = new Server({
  timing: 500
});

//using miragejs to handle api calls
server.db.loadData({
  propertyList: [
    {
      Img:require("@/assets/webp/property1.webp"),
      ImgFallback: require("@/assets/property1.png"),
      title: "House with swimming pool for sale",
      location: "Imadol seetal height, 02 Lalitpur Nepal",
      price: 4500000,
      currency: "Nrs",
      agent: "Bir Bikram Shrestha",
      agentPhone: "+977 9851075136",
      adPostedDate: "7/5/2017",
      tags: ["For Sale", "House", "Bunglow"],
      favourite: false,
      gallery: ["details-aside5.jpg", "details-aside6.jpg", "details-aside7.jpg"],
      bedroom: 3,
      bathroom: 4,
      garage: 1,
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: ['Hardwood Floors', 'Dishwasher', 'Laundry unit', 'Fire place', 'Hot water', 'Central heating']
    },
    {
      Img: require("@/assets/webp/property2.webp"),
      ImgFallback: require("@/assets/property2.png"),
      title: "Bunglow house in Bhaisipati for rent",
      location: "Bhaisipati, 02 Lalitpur Nepal",
      price: 150000,
      currency: "Nrs",
      agent: "Bir Bikram Shrestha",
      agentPhone: "+977 9851075136",
      adPostedDate: "7/5/2019",
      tags: ["For Rent", "House", "Bunglow"],
      favourite: false,
      gallery: ["details-aside5.jpg", "details-aside6.jpg", "details-aside7.jpg"],
      bedroom: 3,
      bathroom: 4,
      garage: 1,
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: ['Hardwood Floors', 'Dishwasher', 'Laundry unit', 'Fire place', 'Hot water', 'Central heating']
    },
    {
      Img: require("@/assets/webp/property3.webp"),
      ImgFallback: require("@/assets/property3.png"),
      title: "Bunglow house with backyard for sale",
      location: "Bhaisipati, 02 Lalitpur Nepal",
      price: 45000000,
      currency: "Nrs",
      agent: "Ram Shrestha",
      agentPhone: "+977 9851075178",
      adPostedDate: "7/5/2019",
      tags: ["For Sale", "House", "Bunglow"],
      favourite: false,
      gallery: ["details-aside5.jpg", "details-aside6.jpg", "details-aside7.jpg"],
      bedroom: 3,
      bathroom: 4,
      garage: 1,
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: ['Hardwood Floors', 'Dishwasher', 'Laundry unit', 'Fire place', 'Hot water', 'Central heating']
    },
    {
      Img: require("@/assets/webp/property5.webp"),
      ImgFallback: require("@/assets/property5.jpg"),
      title: "House with swimming pool for sale",
      location: "Imadol seetal height, 02 Lalitpur Nepal",
      price: 4500000,
      currency: "Nrs",
      agent: "Bir Bikram Shrestha",
      agentPhone: "+977 9851075136",
      adPostedDate: "7/5/2017",
      tags: ["For Sale", "House", "Bunglow"],
      favourite: false,
      gallery: ["details-aside5.jpg", "details-aside6.jpg", "details-aside7.jpg"],
      bedroom: 3,
      bathroom: 4,
      garage: 1,
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: ['Hardwood Floors', 'Dishwasher', 'Laundry unit', 'Fire place', 'Hot water', 'Central heating']
    },
    {
      Img: require("@/assets/webp/property6.webp"),
      ImgFallback: require("@/assets/property6.jpg"),
      title: "Bunglow house in Bhaisipati for rent",
      location: "Bhaisipati, 02 Lalitpur Nepal",
      price: 150000,
      currency: "Nrs",
      agent: "Bir Bikram Shrestha",
      agentPhone: "+977 9851075136",
      adPostedDate: "7/5/2019",
      tags: ["For Rent", "House", "Bunglow"],
      favourite: false,
      gallery: ["details-aside5.jpg", "details-aside6.jpg", "details-aside7.jpg"],
      bedroom: 3,
      bathroom: 4,
      garage: 1,
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: ['Hardwood Floors', 'Dishwasher', 'Laundry unit', 'Fire place', 'Hot water', 'Central heating']
    },
    {
      Img: require("@/assets/webp/property4.webp"),
      ImgFallback: require("@/assets/property4.jpg"),
      title: "Bunglow house with backyard for sale",
      location: "Bhaisipati, 02 Lalitpur Nepal",
      price: 45000000,
      currency: "Nrs",
      agent: "Ram Shrestha",
      agentPhone: "+977 9851075178",
      adPostedDate: "7/5/2019",
      tags: ["For Sale", "House", "Bunglow"],
      favourite: false,
      gallery: ["details-aside5.jpg", "details-aside6.jpg", "details-aside7.jpg"],
      bedroom: 3,
      bathroom: 4,
      garage: 1,
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: ['Hardwood Floors', 'Dishwasher', 'Laundry unit', 'Fire place', 'Hot water', 'Central heating']
    }
  ]
});

server.get('/api/propertyList', (schema) => {
  return schema.db.propertyList;
});

// passthrough any netlify requests from mirage
server.passthrough('https://bprdnvuerealestate.netlify.app/.netlify/identity/**');

new Vue({
  router,
  //allows using store in all components
  store,
  render: h => h(App)
}).$mount('#app');
