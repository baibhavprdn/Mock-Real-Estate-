module.exports = {
	css: {
		loaderOptions: {
			sass: {
				//instead of data use prependData instead to avoid compilation errors 
				prependData: `
						@import "@/styles/_colors.scss";
						@import "@/styles/_utility.scss";
					`
			}
		}
	}
};