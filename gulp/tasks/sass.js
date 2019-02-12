const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');

gulp.task('sass',function(){
    return gulp.src('app/assets/styles/main.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest('web/resources/styles'))
});