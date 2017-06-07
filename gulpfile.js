var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');

//paths
var SRC_DIR = './src/';
var DIST_DIR = './dist/';

var path = {
  sass : {
    entry : SRC_DIR + 'styles/main.scss',
    src : SRC_DIR + 'styles/**/*.scss',
    dist : DIST_DIR + 'css'
  }
}

// task
gulp.task('sass', function () {
  return gulp.src(path.sass.entry)
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.sass.dist));
});


// watch
gulp.task('watch', function () {
  gulp.watch(path.sass.src, ['sass'])
});

// default
gulp.task('default', ['sass', 'watch']);