var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var path = './bower_components';

gulp.task('sass', function() {
  return gulp.src([
   './sass/style.scss'
  ])
  .pipe(sass({
    includePaths: [
      path + '/bootstrap-sass/assets/stylesheets',
      path + '/font-awesome/scss'
    ],
    outputStyle: 'compressed'
  }))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./assets/css'));
});

gulp.task('scripts', function() {
  return gulp.src([
      path + '/jquery/dist/jquery.js',
      path + '/bootstrap-sass/assets/javascripts/bootstrap.js'
    ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('fonts', function() {
  return gulp.src([
    path + '/font-awesome/fonts/fontawesome-webfont.*'
  ])
  .pipe(gulp.dest('./assets/fonts'));
});

gulp.task('default', ['sass', 'scripts', 'fonts']);
