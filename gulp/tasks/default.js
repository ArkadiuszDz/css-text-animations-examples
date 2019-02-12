const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default',function(){
    runSequence(['scripts','sass','page','fonts','images','watch']);
});