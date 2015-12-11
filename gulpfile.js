var gulp = require('gulp');


function displayErrors(err, stdout, stderr) {
  if(err != undefined) {
    console.log("\nERROR FOUND\n\n" + err);
    console.log("\nDUMPING STDOUT\n\n" + stdout);
    console.log("\nDUMPING STDERR\n\n" + stderr);
    process.exit();
  }
}

gulp.task('middleman', function(cb) {
  require('child_process').exec('bundle exec middleman build', function(err, stdout, stderr) {
    if(err) return displayErrors(err, stdout, stderr);
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
