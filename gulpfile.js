var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();

// JS hint task
gulp.task('jshint', function() {
  gulp.src('server.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//browser-sync task
gulp.task('browser-sync', function(){
  browserSync.init({
    server:true,
    directory: true,
    files: '*/*.html'
  });
});

gulp.task('default', ['jshint', 'browser-sync'])
