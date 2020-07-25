const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: false });
const del = require('del');
const autoprefixer = require('autoprefixer');
const minimist = require('minimist');
const browserSync = require('browser-sync').create();
$.sass.compiler = require('node-sass');

const envOptions = {
  string: 'env',
  default: {
    env: 'develop',
  },
};
const options = minimist(process.argv.slice(2), envOptions);
let envIsPro = options.env === 'prod';

function copyHTML() {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./public'));
}

function scss() {
  const processors = [
    autoprefixer(),
  ];
  return gulp.src('./src/scss/**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.postcss(processors))
    .pipe($.if(envIsPro, $.cssnano()))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
}

function babel() {
  return gulp.src('./src/js/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['@babel/env'],
    }))
    .pipe($.concat('all.js'))
    .pipe($.if(envIsPro, $.uglify()))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'));
}

function image() {
  return gulp.src('./src/images/**/*')
    .pipe($.if(envIsPro, $.image()))
    .pipe(gulp.dest('./public/images/'));
}

function clean() {
  return del(['./public', './.tmp']);
}

function browser() {
  browserSync.init({
    server: {
      baseDir: './public',
      reloadDebounce: 8080,
    },
  });
  gulp.watch('./src/**/*.html').on('change', browserSync.reload);
  gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}

function watch() {
  gulp.watch('./src/**/*.html', copyHTML);
  gulp.watch('./src/scss/**/*.scss', scss);
  gulp.watch('./src/js/**/*.js', babel);
}

exports.clean = clean;

// 開啟 server
exports.default = gulp.series(
  copyHTML,
  scss,
  babel,
  image,
  gulp.parallel(watch, browser),
);

// 編譯出未壓縮的檔案（開發中）
exports.dev = gulp.series(
  clean,
  copyHTML,
  gulp.parallel(babel, scss, image),
);

// 編譯出壓縮後的檔案（產品）
exports.build = gulp.series(
  (cb) => {
    envIsPro = true;
    cb();
  },
  clean,
  copyHTML,
  gulp.parallel(babel, scss, image),
);
