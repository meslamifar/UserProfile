var gulp = require('gulp');
var jshint = require('gulp-jshint');

// JS hint task

gulp.task('jshint', function() {
  gulp.src('server.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
