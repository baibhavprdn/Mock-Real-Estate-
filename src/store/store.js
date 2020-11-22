import Vue from 'vue';
import Vuex from 'vuex';
import propertyStore from './modules/property';

Vue.use(Vuex);


export const store= new Vuex.Store({
	strict:true,
	modules:{
		propertyStore
	}
});