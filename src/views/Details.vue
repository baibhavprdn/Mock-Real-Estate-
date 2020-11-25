<template>
	<div>
		<Navbar class="inner-nav" />
		<h2 class="superhero">{{propertyDetail.title}}</h2>
		<section
			id="details"
			class="custom-padding"
		>
			<div
				class="uk-position-relative uk-visible-toggle uk-light"
				tabindex="-1"
				uk-slideshow="ratio: 7:3"
			>

				<ul class="uk-slideshow-items">

					<li
						v-for="galleryImage in propertyDetail.gallery"
						v-bind:key="galleryImage"
					>
						<img
							:src="require(`@/assets/Properties/${galleryImage}`)"
							alt=""
							uk-cover
						>
					</li>

				</ul>
				<a
					class="uk-position-center-left uk-position-small uk-hidden-hover"
					href="#"
					uk-slidenav-previous
					uk-slideshow-item="previous"
				></a>
				<a
					class="uk-position-center-right uk-position-small uk-hidden-hover"
					href="#"
					uk-slidenav-next
					uk-slideshow-item="next"
				></a>
			</div>

			<div
				uk-grid=""
				class="uk-margin-medium-top"
			>
				<div class="uk-width-3-4@m">
					<div class="top-row-info uk-flex">
						<div class="rooms uk-flex ">
							<span class="icon"><img
									src="../assets/icons/bed.png"
									alt="Bedroom"
								></span>{{propertyDetail.bedroom}} Bedroom
							<span class="icon"><img
									src="../assets/icons/bath.png"
									alt="Bathroom"
								></span>{{propertyDetail.bathroom}} Bathroom
							<span class="icon"><img
									src="../assets/icons/garage.png"
									alt="Garage"
								></span>{{propertyDetail.garage}} Garage
						</div>
						<div class="price">
							<h2 class="uk-margin-remove">Nrs {{propertyDetail.price}}</h2>
						</div>
					</div>

					<div class="description uk-margin-top">
						<h3>Description</h3>
						<p>{{propertyDetail.description}}</p>
					</div>
					<div class="features">
						<h3>Features and Amenities</h3>
						<div class="uk-column-1-3@m">
							<p
								v-for="feature in propertyDetail.features"
								v-bind:key="feature"
								class="feature"
							><span uk-icon="check"></span>{{feature}}</p>
						</div>
					</div>
				</div>
				<div class="uk-width-1-4@m">
					<button class="uk-button uk-button-large contact">Contact Us</button>
					<div class="uk-card uk-card-default uk-card-small uk-margin-top">
						<div class="uk-card-header">
							<div
								class="uk-grid-small uk-flex-middle"
								uk-grid
							>
								<div class="uk-width-expand">
									<h3 class="uk-card-title uk-margin-remove-bottom">Contact Info</h3>
								</div>
								<div class="uk-width-auto">
									<img
										class="uk-border-circle"
										width="40"
										height="40"
										src="../assets/agent1.png"
									>
								</div>

							</div>
						</div>
						<div class="uk-card-body">
							<p>Phone Number: {{propertyDetail.agentPhone}}</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
						</div>
						<div class="uk-card-footer">
							<a
								href="#"
								class="uk-button uk-button-text"
							>Read more</a>
						</div>
					</div>
				</div>
			</div>

		</section>
		<Footer />
	</div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
	name: "Details",
	components: {
		Navbar,
		Footer,
	},
	data: () => ({
		propertyDetail: {},
	}),
	created() {
		this.propertyDetail = this.$store.getters["propertyStore/getPropertybyId"](
			this.$route.params.id
		);
	},
};
</script>

<style lang="scss" scoped>
.superhero {
	background-color: $secondary2;
	color: #fff;
	font-weight: 500;
	padding: 2% 6%;
	margin: 0;
}

.img-wrapper {
	position: relative;

	img {
		width: 100%;
		object-fit: cover;
	}
}

.top-row-info {
	display: flex;
	justify-content: space-between;
}

.rooms {
	color: #333;
	font-weight: bold;
	align-items: center;
	.icon img {
		height: 1.5rem;
		width: auto;
		margin-right: 0.5rem;
	}

	.icon:not(:first-of-type) {
		margin-left: 1.5rem;
	}
}

.price {
	h2 {
		color: darken($primary, 5%);
	}
}

.contact {
	width: 100%;
	background: $primary;
	color: #fff;
	font-weight: 500;
	transition: all 0.3s ease-in;
	&:hover {
		background: darken($primary, 5%);
		cursor: pointer;
	}
}

.feature span {
	color: $primary;
	margin-right: 0.5rem;
}
</style>