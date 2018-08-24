const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const del = require('del');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();


// =SASS
gulp.task('sass', function(){
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('./public/medias/styles'))
    .pipe(browserSync.stream());
});


// =HTML
gulp.task('html', function(){
  return gulp.src('./src/html/**/*.html')
    .pipe(gulp.dest('./public/'))
    .pipe(browserSync.stream());
});


// =MEDIAS
gulp.task('medias', function(){
  return gulp.src('./src/medias/**/*')
    .pipe(gulp.dest('./public/medias/'))
    .pipe(browserSync.stream());
});


// =CLEAN
gulp.task('clean', function(){
  return del([
    './public/**/*',
  ]);
});


// =BUILD
gulp.task('build', function(callback){
  return runSequence(
    'clean',
    ['sass', 'html', 'medias'],
    callback
  );
});


// =SERVE
gulp.task('serve', ['watch'], function(){
  browserSync.init({
    server: "./public"
  })
});


// =WATCH
gulp.task('watch', ['build'], function(){
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/html/**/*.html', ['html']);
  gulp.watch('./src/medias/**/*', ['medias']);
});


// =DEFAULT
gulp.task('default', ['build']);
