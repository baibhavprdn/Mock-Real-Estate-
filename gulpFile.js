// https://www.smashingmagazine.com/2018/07/converting-images-to-webp/
//gulp file logic from this

const gulp=require('gulp');
const imagemin=require('gulp-imagemin');
const webp=require('imagemin-webp');
const extReplace=require('gulp-ext-replace');

gulp.task('exportWebp',function(){
	// console.log('Hey');
	let src='src/assets/*.{png,jpg}';
	let dest="src/assets/webp";
	return gulp.src(src)
		.pipe(imagemin([
			webp({
				quality:75
			})
		]))
		.pipe(extReplace('.webp'))
		.pipe(gulp.dest(dest));
});