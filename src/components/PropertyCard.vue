<template>
	<div class="uk-card uk-card-default uk-card-hover property-card">
		<div
			class="img-wrapper"
			v-on:click="showPropertyDetails()"
		>
			<img
				:src="property.Img"
				alt="House for sale"
				:class="{portrait:portrait}"
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
						v-on:click.stop="toggleFavourite()"
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
			<h3
				class="title"
				v-on:click="showPropertyDetails()"
			>{{property.title}}</h3>
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
	data: () => ({
		portrait: false,
	}),
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
		calculatedDate() {
			let adPostedDate = new Date(this.property.adPostedDate);
			let dateDifference = Date.now() - adPostedDate;
			let dateDifferenceStr;
			dateDifference = parseInt(dateDifference / (1000 * 60 * 60 * 24));
			// in days
			if (dateDifference > 365) {
				dateDifferenceStr = parseInt(dateDifference / 365);
				dateDifferenceStr =
					dateDifferenceStr > 1
						? dateDifferenceStr + " years ago"
						: dateDifferenceStr + " year ago";
			} else if (dateDifference > 30) {
				dateDifferenceStr = parseInt(dateDifference / 30);
				dateDifferenceStr =
					dateDifferenceStr > 1
						? dateDifferenceStr + " months ago"
						: dateDifferenceStr + " month ago";
			}
			return dateDifferenceStr;
		},
	},
	mounted() {
		this.imageOrientation(this.property.Img);
	},
	methods: {
		toggleFavourite() {
			this.property.favourite = !this.property.favourite;
		},
		showPropertyDetails() {
			console.log("router link change here");
			this.$router.push({ name: "Property detail", params: this.property });
		},
		imageOrientation(src) {
			let img = new Image();
			img.src = src;

			if (img.naturalWidth < img.naturalHeight) {
				this.portrait = true;
			}
		},
	},
};
</script>

<style lang="scss">
.property-card {
	display: flex;
	flex-direction: column;
	border: 1px solid $box-border-color;

	.img-wrapper {
		position: relative;
		height: 18rem;
		overflow: hidden;

		img {
			height: 100%;
			object-fit: cover;
		}

		img.portrait {
			width: 100%;
			object-fit: cover;
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

		.uk-icon svg[meta="vk-icons-heart"] {
			&:hover {
				cursor: pointer;
			}
		}

		.uk-icon svg[meta="vk-icons-heart"] path {
			transition: all 0.2s ease-in;
		}

		.uk-icon.favourite svg[meta="vk-icons-heart"] path {
			fill: $rent;
			color: $rent;
		}

		.calendar {
			color: #fff;
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
		padding: 1rem;

		h3,
		h4,
		h5,
		p {
			margin: 0;
		}

		h3 {
			font-size: 1.4rem;
			margin-bottom: 0.5rem;
		}
		.title {
			font-weight: 500;
			color: $card-title;
			&:hover {
				cursor: pointer;
				text-decoration: underline;
				color: lighten($card-title, 10%);
			}
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