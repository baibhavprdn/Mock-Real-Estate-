import Vue from 'vue';
import Vuex from 'vuex';
import propertyStore from './modules/property';
import user from './modules/user';

Vue.use(Vuex);

export const store= new Vuex.Store({
	strict:true,
	modules:{
		propertyStore,
		user
	}
});