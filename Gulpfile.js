'use strict';

var stylesPath = 'assets/styles/';

var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');

gulp.task('styles', function() {
	gulp.src(stylesPath + '**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'})).on('error', function(err) {notify().write(err);})
		.pipe(sourcemaps.write())
		.pipe(autoprefixer('last 2 version', '> 1%', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest(stylesPath + 'build'))
		.pipe(notify({ message: 'Styles task complete', onLast: true }));
});

gulp.task('watch', function() {
	gulp.watch(stylesPath + '**/*.scss', ['styles']);
});

// Task assignments
gulp.task('default', ['styles', 'watch']);
