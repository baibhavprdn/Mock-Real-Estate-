<template>
	<footer>
		<div class="top-footer">
			<div class="footer-logo">
				<img
					:src="require('@/assets/logo.png')"
					:alt="logoImage.description"
					class="uk-responsive-width"
				>
			</div>
			<ul class="footer-navigation ul-style-rm">
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
			</ul>
		</div>
		<div class="main-footer	custom-padding">
			<div
				class="uk-child-width-1-4@m uk-grid"
				uk-grid
			>
				<div>
					<h4 class="footer-header">{{aboutUs.title}}</h4>
					<p class="footer-description">{{aboutUs.content1}}</p>
					<p class="footer-description">{{aboutUs.content2}}</p>
				</div>
				<!-- end of footer column -->
				<div>
					<h4 class="footer-header">Newsletter Subscribe</h4>
					<form>
						<label for="email-subscription">Email address:</label>
						<input
							type="email"
							class="uk-input"
							placeholder="Your Email Address"
						>
						<button class="uk-button btn-primary btn-rounded">Sign Up</button>
					</form>

					<h5 class="social-header">Connect with us</h5>
					<div class="socialmedia-container">
						<a
							href=""
							class="uk-icon-link"
							uk-icon="facebook"
						></a>
						<a
							href=""
							class="uk-icon-link"
							uk-icon="twitter"
						></a>
						<a
							href=""
							class="uk-icon-link"
							uk-icon="google-plus"
						></a>
						<a
							href=""
							class="uk-icon-link"
							uk-icon="linkedin"
						></a>
					</div>
				</div>
				<!-- end of footer column -->
				<div>
					<h4 class="footer-header">Contact Us</h4>
					<!-- <h5 class="primary">Reality property</h5> -->
					<p class="contact-meta">Imadol, Sital Height, Lalitpur Nepal</p>
					<p class="contact-meta">+977 123 456 7890</p>
					<p class="contact-meta">
						<a href="#">demolink@gmail.com</a>
					</p>
				</div>
				<div>
					<h4 class="footer-header">Useful Links</h4>
					<ul class="ul-style-rm">
						<li>
							<a href="#">Department</a>
						</li>
						<li>
							<a href="#">Home in Boston</a>
						</li>
						<li>
							<a href="#">Inspiring Design</a>
						</li>
						<li>
							<a href="#">Real Blog</a>
						</li>
						<li>
							<a href="#">Uncategorized</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "Footer",
	components: {},
	data: () => ({
		aboutUs:{
			title:'About Us',
			content1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque numquam nesciunt nobis rem cum maiores ratione	vitae quasi magnam tempora totam voluptatibus accusamus nemo, eveniet debitis facere, placeat illum?',
			content2:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
		}
	}),
	computed: {
		...mapGetters(['logoImage','pageNavigationList']),
	},
};
</script>

<style lang="scss" scoped>
footer {
	background-image: url(../assets/footer-background.jpg);
	background-size: cover;
	background-color: rgba(0, 0, 0, 0.2);
	background-blend-mode: multiply;
	.top-footer {
		display: flex;
		padding: 1.5% 0 1%;
		border-bottom: 2px solid $footer-border;
		.footer-logo {
			margin-left: auto;
			margin-right: auto;
			@media (min-width: 768px) {
				border-right: 2px solid $footer-border;
				padding: 0 5%;
				margin: 0;
				img {
					width: 10rem;
					height: auto;
				}
			}
		}
	}
	.footer-navigation {
		display: none;
		@media (min-width: 768px) {
			display: flex;
			align-items: center;
			line-height: 1.5rem;
			margin: 0;
			li {
				padding: 2rem;
				color: $footer-navlink;
				text-decoration: none;
				transition: all 0.2s ease;
				&:hover {
					color: $primary;
					cursor:pointer;
				}
			}
		}
	} // end of top footer
	.main-footer {
		.footer-header {
			color: #fff;
			position: relative;
			margin-bottom: 2rem;
		}
		.footer-header:after {
			position: absolute;
			content: "";
			bottom: -1rem;
			height: 1px;
			width: 100%;
			left: 0;
			background-color: $footer-text;
		}
		.footer-header:before {
			position: absolute;
			content: "";
			bottom: -1rem;
			height: 1px;
			width: 20%;
			left: 0;
			background-color: $primary;
			z-index: 2;
		}
		.footer-description {
			color: $footer-text;
			font-size: 0.9rem;
		}
		label {
			color: $footer-text;
		}
		.uk-input {
			background-color: transparent;
			border: 1px solid $footer-text;
			margin: 0.5rem 0;
		}
		.social-header {
			margin: 0.5rem 0 0.25rem;
			color: $footer-navlink;
		}
		.socialmedia-container {
			a {
				color: $footer-navlink;
				margin-right: 0.25rem;
			}
		}
		h5.primary {
			text-transform: uppercase;
			margin-bottom: 0;
		}
		.contact-meta {
			margin: 0.3rem 0;
			color: $footer-text;
			font-size: 0.9rem;
			a {
				color: $footer-text;
			}
		}
		ul > li > a {
			color: $footer-text;
			font-size: 0.9rem;
		}
	}
}

.bottom-footer {
	text-align: center;
	background-color: #fff;
	color: #000;
	padding: 1%;
}

.ul-style-rm {
	list-style-type: none;
	padding-left: 0;
}
</style>