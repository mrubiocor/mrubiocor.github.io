const { src, dest, watch, series } = require('gulp');
const dartSass = require('sass');
const gulpSass = require('gulp-sass')(dartSass);
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();

const paths = {
  styles: {
    src: 'assets/sass/**/*.sass',
    dest: 'assets/css'
  },
  scripts: {
    src: 'assets/js/**/*.js'
  },
  html: {
    src: '*.html'
  }
};

function styles() {
  return src(paths.styles.src)
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cssnano())
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  watch(paths.styles.src, styles);
  watch(paths.scripts.src).on('change', browserSync.reload);
  watch(paths.html.src).on('change', browserSync.reload);
}

exports.default = series(styles, serve);
