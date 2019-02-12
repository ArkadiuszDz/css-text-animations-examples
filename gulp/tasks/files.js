const gulp = require('gulp');

gulp.task('page',function(){
    return gulp.src('app/views/**/*.html')
    .pipe(gulp.dest('web/'));
});

gulp.task('fonts',function(){
    return gulp.src('app/assets/fonts/**/*')
    .pipe(gulp.dest('web/resources/fonts/'));
});

gulp.task('images',function(){
    return gulp.src('app/assets/images/**/*')
    .pipe(gulp.dest('web/resources/images/'));
});