const state = {
	flavor: '',
	propertyList: [],
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
		}
		// {
		// 	name: "Login",
		// 	route: "/contact",
		// 	description: "Login",
		// 	active: false,
		// 	icon: "user",
		// },
	],
	logoImage: {
		image: "@/assets/logo.png",
		description: "Real Estate",
	}
};

const mutations = {
	change(state, flavor) {
		state.flavor = flavor;
	},
	SET_PROPERTYLIST(state, payload) {
		state.propertyList = payload;
	}
};

const actions = {
	getPropertyList({ commit }) {
		this._vm.$http
			.get("/api/propertyList")
			.then((result) => {
				commit('SET_PROPERTYLIST', result.data);
			})
			.catch(error => console.log(error));
	}
};

const getters = {
	flavor: state => state.flavor,
	propertyList: state => state.propertyList,
	pageNavigationList: state => state.pageNavigationList,
	logoImage: state => state.logoImage,
	getPropertybyId: (state) => (id) => {
		return state.propertyList.find(todo => todo.id === id);
	}
};

const propertyStore= {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};

export default propertyStore;