/* Build */
var gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp);

gulp.task('build', function(callback) {
    runSequence(
        'clean',
        'jade',
        'bower',
        'js',
        'png-sprite',
        'images',
        'svg',
        'svg-sprite',
        'fonts',
        'less',
        'txt',
        //'gh-pages',
        callback)
});
