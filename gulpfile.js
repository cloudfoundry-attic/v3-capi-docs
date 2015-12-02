var gulp = require('gulp');

gulp.task('middleman', function(cb) {
  require('child_process').exec('bundle exec middleman build', function() {
    cb();
  });
});

gulp.task('webserver', function() {
  var webserver = require('gulp-webserver');
  gulp.src('build').pipe(webserver({
    livereload: true
  }));
});

gulp.task('watch', function() {
  gulp.watch(['source/**/*'], ['middleman']);
});

gulp.task('default', ['webserver', 'watch']);
