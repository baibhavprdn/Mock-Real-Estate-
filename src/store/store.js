import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store= new Vuex.Store({
	state:{
		flavor:'',
		propertyList:[],
		pageNavigationList: [
			{
				name: "Home",
				route: "/",
				description: "Home",
				active: true,
			},
			{
				name: "About Us",
				route: "/about",
				description: "About Us",
				active: false,
			},
			{
				name: "Contact Us",
				route: "/contact",
				description: "Contact Us",
				active: false,
			},
			{
				name: "Property",
				route: "/contact",
				description: "Property",
				active: false,
			},
			{
				name: "Listing",
				route: "/contact",
				description: "Listing",
				active: false,
			},
			{
				name: "Login",
				route: "/contact",
				description: "Login",
				active: false,
				icon: "user",
			},
		],
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
		propertyList:state=>state.propertyList,
		pageNavigationList:state=>state.pageNavigationList
	}
});