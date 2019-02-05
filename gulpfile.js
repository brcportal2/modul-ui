const gulp = require('gulp');
const del = require('del');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');


const options = {
	pathPublish: '.publish',
	source: [
		'source/**/*.{js,jsx,styl}',
		'!source/**/*.spec.*'
	],
	dataPublish: [
		'*.md',
		'package.json'
	]
};


gulp.task('clean', () => {
	return del([options.pathPublish]);
});

gulp.task('js', ['clean'], () => {
	return gulp
		.src(options.source)
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(options.pathPublish));
});

gulp.task('data', ['clean'], () => {
	return gulp
		.src(options.dataPublish)
		.pipe(gulp.dest(options.pathPublish));
});


gulp.task('default', ['js', 'data']);