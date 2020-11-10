<template>
	<div class="uk-card uk-card-default uk-card-hover property-card">
		<div class="img-wrapper">
			<img
				:src="property.Img"
				alt="House for sale"
			/>
			<div class="tags-wrapper">
				<span
					class="uk-badge"
					:class="saleOrRentClass"
				>{{propertyTag}}</span>
			</div>
			<div class="bottom-tags-wrapper">
				<div class="favourite">
					<vk-icon
						reset=""
						href=""
						icon="heart"
						ratio="1.3"
						v-on:click="toggleFavourite()"
						v-bind:class="{favourite:property.favourite}"
					></vk-icon>
				</div>
				<div class="calendar">
					<span>
						<vk-icon
							icon="calendar"
							ratio="1.3"
						></vk-icon>
						{{calculatedDate}}
					</span>
				</div>
			</div>
		</div>
		<div class="card-content">
			<h4 class="title">{{property.title}}</h4>
			<p class="subheader">
				<!-- <vk-icon icon="location" ratio="0.8"></vk-icon> -->
				{{property.location}}
			</p>
			<h4 class="price">{{priceValue}} </h4>
			<div class="agent-info">
				<div>
					<vk-icon
						icon="user"
						ratio="1"
					></vk-icon>{{property.agent}}
				</div>
				<div>
					<vk-icon
						icon="phone"
						ratio="1"
					></vk-icon>{{property.agentPhone}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PropertyCard",
	props: {
		property: Object,
	},
	data: () => ({}),
	computed: {
		priceValue: function () {
			return (
				this.property.currency + " " + this.property.price.toLocaleString()
			);
		},
		saleOrRentClass: function () {
			let saleRentObj = {
				sale: false,
				rent: false,
			};
			this.property.tags.indexOf("For Sale") > -1
				? (saleRentObj.sale = true)
				: (saleRentObj.rent = true);
			return saleRentObj;
		},
		propertyTag: function () {
			return this.property.tags.indexOf("For Sale") != -1
				? "For Sale"
				: "For Rent";
		},
		calculatedDate(){
			let adPostedDate=new Date(this.property.adPostedDate);
			let dateDifference=Date.now()-adPostedDate;
			let dateDifferenceStr;
			dateDifference=parseInt(dateDifference/(1000*60*60*24))
			// in days
			if(dateDifference>365){
				dateDifferenceStr= parseInt(dateDifference/365);
				dateDifferenceStr=dateDifferenceStr>1?dateDifferenceStr+' years ago':dateDifferenceStr+' year ago';
			}
			else if(dateDifference>30){
				dateDifferenceStr= parseInt(dateDifference/30);
				dateDifferenceStr=dateDifferenceStr>1?dateDifferenceStr+' months ago':dateDifferenceStr+' month ago';
			}
			return dateDifferenceStr;
		}
	},
	methods:{
		toggleFavourite(){
			this.property.favourite=!this.property.favourite;
		}
	}
};
</script>

<style lang="scss">
.property-card {
	display: flex;
	flex-direction: column;
	border: 1px solid $box-border-color;

	.img-wrapper {
		position: relative;
		height:18rem;

		img{
			height:100%;
			object-fit:cover;
		}
	}

	.tags-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.bottom-tags-wrapper {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;

		div {
			margin: 0.5rem 1rem;
		}

		.uk-icon {
			color: #fff;
		}

		.uk-icon svg[meta="vk-icons-heart"] path {
			transition:all 0.2s ease-in;
			&:hover{
				cursor:pointer;
			}
		}

		.uk-icon.favourite svg[meta="vk-icons-heart"] path {
			fill: $rent;
			color:$rent;
		}

		.calendar{
			color:#fff;
		}
	}

	.uk-badge {
		padding: 1rem;
		margin: 0.5rem;
	}

	.uk-badge.rent {
		background-color: $rent;
	}

	.uk-badge.sale {
		background-color: $sale;
	}

	.card-content {
		padding: 0.5rem;

		h4,
		h5,
		p {
			margin: 0;
		}

		.title {
			font-weight: 500;
			color: $card-title;
		}

		.subheader {
			font-size: 0.9rem;
		}

		.uk-icon {
			color: $primary;
		}

		.price {
			margin: 0.5rem 0;
			color: $primary-dark;
			font-weight: 500;
		}

		.agent-info {
			display: flex;
		}

		.agent-info div {
			display: flex;
			align-items: center;
			margin-right: 2rem;
		}
	}
}
</style>