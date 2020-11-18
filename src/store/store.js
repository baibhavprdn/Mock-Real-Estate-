import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store= new Vuex.Store({
	state:{
		flavor:'',
		propertyList:[]
	},
	mutations:{
		change(state,flavor){
			state.flavor=flavor;
		},
		SET_PROPERTYLIST(state,payload){
			state.propertyList=payload;
		}
	},
	actions:{
		getPropertyList({commit }){
			console.log('action fired');
			this._vm.$http
				.get("/api/propertyList")
				.then((result) => {
					commit('SET_PROPERTYLIST',result.data);
				})
				.catch(error=>console.log(error));
		}
	},
	getters:{
		flavor:state=>state.flavor,
		propertyList:state=>state.propertyList
	}
});