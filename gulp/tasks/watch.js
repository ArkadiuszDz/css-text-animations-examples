const gulp = require('gulp');


gulp.task('watch',function(){
    gulp.watch('app/assets/scripts/**/*.js',['scripts']);
    gulp.watch('app/assets/styles/**/*.scss',['sass']);
    gulp.watch('app/views/**/*.html',['page']);
});

//dodac taski do watch 