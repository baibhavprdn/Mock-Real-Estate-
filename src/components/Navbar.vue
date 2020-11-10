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
			<vk-navbar-nav-item
				class="nav-item"
				v-for="pageNavigation in pageNavigationList"
				:key="pageNavigation.name"
				:title="pageNavigation.name"
				:icon="pageNavigation.icon"
			>{{ pageNavigation.name }}
			</vk-navbar-nav-item>
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
				link: "#",
				description: "Home",
				active: true,
			},
			{
				name: "About Us",
				link: "#",
				description: "About Us",
				active: false,
			},
			{
				name: "Contact Us",
				link: "#",
				description: "Contact Us",
				active: false,
			},
			{
				name: "Property",
				link: "#",
				description: "Property",
				active: false,
			},
			{
				name: "Listing",
				link: "#",
				description: "Listing",
				active: false,
			},
			{
				name: "Login",
				link: "#",
				description: "Login",
				active: false,
				icon: "user",
			},
		],
	}),
};
</script>

<style lang="scss" scoped>
nav {
	height: 7rem;
}

.uk-navbar-container:not(.uk-navbar-transparent) {
	background-color: rgba(0, 0, 0, 0.3);
}

.nav-item {
	a {
		color: white;
		font-size: 1.2rem;
		text-transform: capitalize;
		&:hover {
			color: $primary;
		}
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