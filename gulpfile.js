var gulp 	= require('gulp');
var	pkg		= require('./package.json');
var concat	= require('gulp-concat');
var uglify	= require('gulp-uglify');
var concat 	= require('gulp-concat');
var jshint	= require('gulp-jshint');


gulp.task('static', function() {
	return gulp.src([
		'src/**/*.html'
		], { "base": "src" })
		.pipe(gulp.dest("public/"));
});

gulp.task('libs', function() {
	return gulp.src(['src/lib/**/*.js'])
				.pipe(concat(pkg.name+'-libs.min.js'))
				.pipe(uglify())
				.pipe(gulp.dest("public/lib/"));
});

gulp.task('app', function() {
	return gulp.src(['src/js/**/*.js'])
			.pipe(jshint())
			.pipe(jshint.reporter('jshint-stylish'))
			.pipe(concat(pkg.name+'.min.js'))
			// .pipe(uglify())  // TODO: uncomment this later, easier to debug this way
			.pipe(gulp.dest("public/js/"));
});

gulp.task('css', function() {
	return gulp.src(['src/**/*.css'])
				.pipe(concat('style.css'))
				.pipe(gulp.dest('public/css/'));
});

gulp.task('watch', function() {
	gulp.watch(['src/js/**/*.js'], ['app']);
	gulp.watch(['src/**/*.html'], ['static']);
});


gulp.task('default', ['static','css','libs','app']);
