<template>
	<div>
		<header id="header">
			<Navbar />
			<div class="header-content">
				<h4 class="text-white">Property for sale and rent</h4>
				<h1 class="text-white">
					Search and find your <span class="primary">dream house</span>
				</h1>
				<!-- <div class="text-white">search box here</div> -->
				<div class="filter-column-wrapper">
					<h3 class="text-white">Browse property types</h3>
					<div class="filter-columns">
						<div
							class="filter-item"
							v-for="filterItem in filterItems"
							:key="filterItem.name"
						>
							<div class="filter-item-icon">
								<img
									:src="filterItem.imgSrc"
									alt="Apartment"
								/>
							</div>
							<div class="filter-item-label text-white">
								{{ filterItem.name }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<section
			id="property-list"
			class="custom-padding"
		>
			<h2 class="section-header"><span>Latest</span> Properties</h2>
			<h5 class="section-subheader">Listing the hottest properties around you</h5>
			<!-- <LazyImage :source="propertyList[0]"/> -->
			<div id="property-list-grid">
				<PropertyCard
					v-for="propertyItem in propertyList"
					:key="propertyItem.id"
					:property="propertyItem"
				/>
			</div>
		</section>
		<Footer/>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import PropertyCard from "@/components/PropertyCard.vue"
import Footer from "@/components/Footer.vue"
// import LazyImage from '@/components/LazyImage';
import { mapGetters } from "vuex"

export default {
	name: "Home",
	components: {
		Navbar,
		PropertyCard,
		Footer,
		// LazyImage
	},
	data: () => ({
		filterItems: [
			{
				imgSrc: require("@/assets/icons/building.png"),
				name: "House",
			},
			{
				imgSrc: require("@/assets/icons/building-land.png"),
				name: "Land",
			},
			{
				imgSrc: require("@/assets/icons/apartment.png"),
				name: "Apartment",
			},
			{
				imgSrc: require("@/assets/icons/house.png"),
				name: "Housing",
			},
		],
	}),
	created() {
		this.$store.dispatch("propertyStore/getPropertyList");
	},
	computed: {
		...mapGetters("propertyStore",["propertyList"]),
	},
};
</script>

<style lang="scss" scoped>
#header {
	position: relative;
	background: url(../assets/webp/main-banner.webp);
	height: 100vh;
	background-size: cover;

	.header-content {
		text-align: center;
		height: 100%;
		padding: 5% 10%;

		h4 {
			text-transform: uppercase;
			font-weight: 400;
		}

		h1 {
			text-transform: capitalize;
			font-weight: 400;

			.primary {
				color: $primary;
			}
		}

		.filter-columns {
			display: flex;
			// grid-template-columns:repeat(4,1fr);
			justify-content: space-between;
			margin: 0 auto;
			flex-wrap: wrap;

			@media (min-width:768px){
				width:70%;
			}
		}

		.filter-item-icon {
			padding: 2rem;
			background-color: rgba(0, 0, 0, 0.4);
			transition: all ease-in 0.1s;
			width: 4rem;
			&:hover {
				background-color: $primary;
				cursor: pointer;
			}
		}

		.filter-item-label {
			font-size: 1.2rem;
			font-weight: 500;
		}
	}

	.text-white {
		color: #fff;
	}

	@media(max-width:768px){
		h1{
			font-size:1.7rem;
		}

		
	}
}

#property-list {
	.section-header {
		font-weight: 500;
		margin: 0;

		span {
			color: $primary;
		}
	}

	.section-subheader {
		margin: 0;
	}

	#property-list-grid {
		margin-top: 2%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minMax(300px, 1fr));
		grid-gap: 1rem;

		@media (min-width: 900px) {
			#property-list-grid {
				grid-template-columns: repeat(auto-fit, minMax(350px, 1fr));
			}
		}
	}
}
</style>
