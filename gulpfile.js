const { watch, src, dest, series } = require('gulp');
const inlineCss = require('gulp-inline-css');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const htmlMin = require('gulp-htmlmin');

const minifyHtml = () => {
  return src('build/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(dest('prod'));
};

const buildStyles = () => {
  return src('src/css/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream());
};

const buildHtml = () => {
  return src('src/index.html')
    .pipe(inlineCss(
      {
        preserveMediaQueries: true,
        applyWidthAttributes: true,
        removeHtmlSelectors: true
      }
    ))
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
};

const buildImg = () => {
  return src('src/img/*.*')
    .pipe(dest('build/img/'))
};

const watchFiles = () => {
  browserSync.init({
    server: "./build/"
  });
  watch(['src/css/scss/style.scss', 'src/index.html'], series(buildStyles, buildHtml));
};

exports.build = minifyHtml;
exports.default = series(buildImg, buildStyles, buildHtml, watchFiles);

