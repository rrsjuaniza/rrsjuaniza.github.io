const gulp = require('gulp');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');

function styles() {
  const plugins = [
    require('postcss-import'),        // merge @import files
    require('cssnano')({ preset: 'default' })  // minify
  ];

  return gulp.src('assets/css/main-with-imports.css')  // entry file
    .pipe(postcss(plugins))
    .pipe(concat('main.min.css'))    // final merged + minified file
    .pipe(gulp.dest('assets/css'));
}

function watchFiles() {
  gulp.watch('assets/css/*.css', styles); // watch only source files
}

exports.styles = styles;
exports.watch = watchFiles;