import Vue from 'vue';
import Vuex from 'vuex';
import propertyStore from './modules/property';
import user from './modules/user';
import createPersistantState from 'vuex-persistedstate';

Vue.use(Vuex);

export const store= new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules:{
		propertyStore,
		user
	},
	plugins:[createPersistantState({
		storage:window.sessionStorage
	})]
});




