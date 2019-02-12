const concat = require('gulp-concat-js');
const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const babel = require('gulp-babel');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');


 gulp.task('scripts',function(){
    return browserify('./app/assets/scripts/app.js')
    .transform(babelify, {
        presets: ["@babel/preset-env"],
        plugins: ['@babel/transform-runtime']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./web/resources/scripts/'))
 });


