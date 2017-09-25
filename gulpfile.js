'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', ['sass','minify-css']);

gulp.task('sass', function () {
    return gulp.src('./web/css/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./web/css'));
});



gulp.task('minify-css', ['sass'], function () {
    return gulp.src('./web/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./web/css/min'));
});


// gulp.task('sass:watch', function () {
//     gulp.watch('./web/css/sass/*.scss', ['sass']);
// });