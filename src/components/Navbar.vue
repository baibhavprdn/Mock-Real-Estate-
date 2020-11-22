<template>
	<vk-navbar class="custom-padding-sides">
		<vk-navbar-nav class="uk-width-expand uk-flex-between desktop">
			<vk-navbar-logo>
				<img
					:src="require('@/assets/logo.png')"
					:alt="logoImage.description"
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
			<li
				class="nav-item"
				@click="triggerNetlifyIdentityAction('login')"
			>Login</li>
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

		<vk-navbar-nav class="mobile">
			<vk-offcanvas-content>
				<vk-navbar-toggle @click="mobileNav=true"></vk-navbar-toggle>

				<vk-offcanvas
					overlay
					:show.sync="mobileNav"
				>
					<vk-offcanvas-bar class="uk-flex uk-flex-column">
						<vk-nav
							type="primary"
							center
							class="uk-margin-auto-vertical"
						>
							<!-- <vk-nav-item-header title="Header"></vk-nav-item-header> -->

							<router-link
								tag="li"
								class="nav-item"
								v-for="pageNavigation in pageNavigationList"
								:key="pageNavigation.name"
								:title="pageNavigation.name"
								:icon="pageNavigation.icon"
								:to="pageNavigation.route"
							>
								{{ pageNavigation.name }}
							</router-link>
							<!-- <vk-nav-item
								title="Item"
								icon="thumbnails"
							></vk-nav-item> -->
						</vk-nav>
					</vk-offcanvas-bar>
				</vk-offcanvas>

			</vk-offcanvas-content>

		</vk-navbar-nav>
	</vk-navbar>
</template>

<script>
import netlifyIdentity from "netlify-identity-widget";

import { mapGetters, mapActions } from "vuex";

netlifyIdentity.init({});

export default {
	name: "Navbar",
	components: {},
	data: () => ({
		addProperty: {
			buttonName: "Add Property",
			icon: "plus",
		},
		mobileNav: false,
		currentUser: null,
	}),
	methods: {
		...mapActions("user", {
			updateUser: "updateUser",
		}),
		addPropertyMethod: function () {
			alert("New property to be added here");
		},
		triggerNetlifyIdentityAction(action) {
			if (action == "login" || action == "signup") {
				netlifyIdentity.open(action);
				netlifyIdentity.on(action, (user) => {
					this.currentUser = {
						username: user.user_metadata.full_name,
						email: user.email,
						access_token: user.token.access_token,
						expires_at: user.token.expires_at,
						refresh_token: user.token.refresh_token,
						token_type: user.token.token_type,
					};
					this.updateUser({
						currentUser: this.currentUser,
					});
					netlifyIdentity.close();
				});
			} else if (action == "logout") {
				this.currentUser = null;
				this.updateUser({
					currentUser: this.currentUser,
				});
				netlifyIdentity.logout();
				this.$router.push({ name: "Home" });
			}
		},
	},
	computed: {
		...mapGetters("propertyStore", ["pageNavigationList", "logoImage"]),
	},
};
</script>

<style lang="scss" scoped>
nav {
	height: 4rem;
}

.uk-navbar-container:not(.uk-navbar-transparent) {
	background-color: rgba(0, 0, 0, 0.3);
}

.uk-navbar-container:not(.uk-navbar-transparent).inner-nav {
	background-color: #fff;
}

.desktop {
	display: none;
}

.mobile {
	display: flex;
}

.uk-navbar-toggle {
	height: inherit;
}

.nav-item {
	color: #999;
	font-size: 1.7rem;
	margin: 0.5rem 0;
	text-transform: capitalize;
	align-self: center;
	&:hover {
		color: $primary;
		cursor: pointer;
	}
}

.inner-nav .nav-item {
	color: #000;
	font-size: 1.2rem;
	text-transform: capitalize;
	align-self: center;
	&:hover {
		color: $primary;
		cursor: pointer;
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

@media (min-width: 900px) {
	.uk-navbar-toggle {
		height: 80px;
	}

	nav {
		height: 7rem;
	}

	.desktop {
		display: flex;
	}

	.mobile {
		display: none;
	}

	.nav-item {
		color: white;
		font-size: 1.2rem;
		text-transform: capitalize;
		align-self: center;
		&:hover {
			color: $primary;
			cursor: pointer;
		}
	}
}
</style>