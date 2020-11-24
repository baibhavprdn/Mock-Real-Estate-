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
				uk-slideshow="ratio: 7:3; animation: push"
			>

				<ul class="uk-slideshow-items">

					<li v-for="galleryImage in propertyDetail.gallery" v-bind:key="galleryImage">
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
		// this.setupGallery();
	},
	methods: {
		setupGallery: function () {
			// this.propertyDetail.gallery.forEach(
			// 	(element, i) => (this.propertyDetail.gallery[i] = require(element))
			// );
			// console.log(this.propertyDetail.gallery);
		},
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
</style>