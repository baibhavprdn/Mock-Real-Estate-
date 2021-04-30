<template>
	<!-- <figure class="image-wrapper">
		<img :src="require(`@/assets/webp/${source}`)" alt="Random Image">
	</figure> -->

	<picture v-lazyLoad>
		<source
			:data-url="source.Img"
			type="image/webp"
			uk-img
			class="uk-responsive-height"
		>
		<img
			:data-url="source.ImgFallback"
			alt="House for sale"
		/>
	</picture>

</template>

<script>
export default {
	name: "LazyImage",
	components: {},
	props: {
		source: {
			type: Object,
			required: true,
		},
	},
	data: () => ({}),
	directives: {
		lazyLoad: {
			inserted: (el) => {
				let loadImage = () => {
					const imageElement = Array.from(el.children).find(
						(el) => el.nodeName === "IMG"	
					);
					if (imageElement) {
						imageElement.addEventListener("load", () => {
							setTimeout(() => el.classList.add("loaded"), 100);
						});
						imageElement.addEventListener("error", () => console.log("error"));
						imageElement.src = imageElement.dataset.url;
					}
				};

				let options = {
					threshold: 1.0,
				};

				let callback = (entries, observer) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							loadImage();
							observer.unobserve(el);
						}
						// main work here
					});
				};

				let observer = new IntersectionObserver(callback, options);
				observer.observe(el);
			},
		},
	},
};
</script>