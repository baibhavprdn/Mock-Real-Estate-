<template>
	<div>
		<Navbar class="inner-nav" />
		<div class="search-bar custom-padding">
			<div class="input-wrapper">
				<input
					type="text"
					class="uk-input"
					placeholder="Title, keyword, address, zip or property id"
				>
				<button class="uk-button">Search</button>
			</div>
		</div>

		<section class="custom-padding">

			<ul class="uk-breadcrumb">
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/listing">Listing</router-link></li>
			</ul>
			<h3 class="section-header">Properties available</h3>
			<div uk-grid="">
				<div class="uk-width-2-3@m">
					<PropertyCardListview/>
				</div>
				<div class="uk-width-1-3@m">
					test
				</div>

			</div>
		</section>

		<Footer />
	</div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCardListview from "@/components/PropertyCardListview";

export default {
	name: "Listing",
	components: {
		Navbar,
		Footer,
		PropertyCardListview
	},
	data: () => ({
		propertyList:{}
	}),
	methods: {},
	created(){
		this.$store.dispatch('propertyStore/getPropertyList');
		
	}
};
</script>

<style lang="scss" scoped>
.search-bar {
	background-color: $secondary2;
}

.input-wrapper {
	display: flex;

	input {
		height: 4rem;
	}

	.uk-button {
		background-color: $secondary;
		color: #fff;
		width: 15%;
		transition: all 0.5 ease;

		&:hover {
			background-color: darken($secondary, 2%);
		}
	}
}

.section-header{
	margin-top:1rem;
}
</style>