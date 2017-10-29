const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('sass', () => {
  return gulp.src([ './_sass/*.scss' ])
  .pipe(sass({ outputStyle: 'compressed' }))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', [ 'sass' ]);
