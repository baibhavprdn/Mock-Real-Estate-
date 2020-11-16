<template>
	<vk-navbar class="custom-padding-sides">
		<vk-navbar-nav class="uk-width-expand uk-flex-between">
			<vk-navbar-logo>
				<img
					:src="require('@/assets/logo.png')"
					:alt="logoImage.imageDescription"
					uk-img
					class="uk-responsive-height"
				/>
			</vk-navbar-logo>
			<router-link
				class="nav-item"
				v-for="pageNavigation in pageNavigationList"
				:key="pageNavigation.name"
				:title="pageNavigation.name"
				:icon="pageNavigation.icon"
				:to="pageNavigation.route"
				tag="li"
			>
				{{ pageNavigation.name }}
			</router-link>
			<vk-navbar-item>
				<vk-button
					href="#"
					class="uk-button btn-primary"
					v-on:click="addPropertyMethod"
					:icon="addProperty.icon"
				>{{ addProperty.buttonName }}
				</vk-button>
			</vk-navbar-item>
		</vk-navbar-nav>
	</vk-navbar>
</template>

<script>
export default {
	name: "Navbar",
	components: {},
	data: () => ({
		logoImage: {
			image: "@/assets/logo.png",
			description: "Real Estate",
		},
		addProperty: {
			buttonName: "Add Property",
			icon: "plus",
		},
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
	}),
	methods: {
		addPropertyMethod: function () {
			alert("New property to be added here");
		},
	},
};
</script>

<style lang="scss" scoped>
nav {
	height: 7rem;
}

.uk-navbar-container:not(.uk-navbar-transparent) {
	background-color: rgba(0, 0, 0, 0.3);
}

.uk-navbar-container:not(.uk-navbar-transparent).inner-nav {
	background-color: #fff;
}

.nav-item {
	color: white;
	font-size: 1.2rem;
	text-transform: capitalize;
	align-self:center;
	&:hover {
		color: $primary;
		cursor:pointer;
	}
}

.inner-nav .nav-item{
	color:#000;
	font-size: 1.2rem;
	text-transform: capitalize;
	align-self:center;
	&:hover{
		color:$primary;
		cursor:pointer;
	}
}

.uk-navbar-left {
	width: 100%;
}

.uk-button-default.btn-primary {
	background-color: $primary;
	color: #fff;
	border-radius: 5px;
	border: none;
	&:hover {
		background-color: darken($primary, 5%);
	}
}
</style>