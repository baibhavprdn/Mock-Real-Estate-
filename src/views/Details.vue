<template>
	<div>
		<Navbar class="inner-nav" />
		<h2 class="superhero">{{propertyDetail.title}}</h2>
		<section
			id="details"
			class="custom-padding"
		>
			<vk-grid>
				<div class="uk-width-2-3@m img-wrapper">
					<img :src="propertyDetail.Img" :alt="propertyDetail.title">
				</div>
				<div class="uk-width-1-3@m">
					<h3>Side nav</h3>
				</div>
			</vk-grid>
		</section>
		<Footer/>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default {
	name: "Details",
	components: {
		Navbar, Footer
	},
	data: () => ({
		propertyDetail: {},
	}),
	created() {
		this.propertyDetail = this.$route.params;
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

.img-wrapper{
	position:relative;
	
	img{
		width:100%;
		object-fit:cover;
	}
}
</style>