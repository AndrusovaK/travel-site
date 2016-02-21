var gulp = require('gulp'),
    config = require('./config');

gulp.task('css', function() {
  console.log('---------- копирование CSS');
  return gulp.src('src/less/vendor/*.css')
    .pipe(gulp.dest('dist/css/vendor'));
});