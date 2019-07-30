var gulp  = require('gulp'),
  stylus  = require('gulp-stylus'),
  concat  = require('gulp-concat'),
  rename  = require('gulp-rename'),
  postcss = require('gulp-postcss'),
  pug     = require('gulp-pug')

var path = require('path')
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')
var source = {
  src: path.join('src', 'syuanpi.styl'),
  dist: path.join('dist'),
  site: path.join('docs', 'lib')
}
var site = {
  src: path.join('site', 'index.pug'),
  style: path.join('site', 'style.styl'),
  dist: path.join('docs')
}

function build() {
  return gulp
    .src(source.src)
    .pipe(stylus())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          "last 2 version",
          "iOS >= 8",
          "Android >= 5.0",
          "Firefox ESR"
        ],
        cascade: true
      })
    ]))
    .pipe(rename({
      basename: 'syuanpi',
      extname: '.css'
    }))
    .pipe(gulp.dest(source.dist))
  }

  function minicss() {
    return gulp
    .src(path.join(source.dist, 'syuanpi.css'))
    .pipe(postcss([cssnano()]))
    .pipe(rename({
      basename: 'syuanpi',
      suffix: '.min',
      extname: '.css'
    }))
    .pipe(gulp.dest(source.dist))
    .pipe(gulp.dest(source.site))
}

function render(cb) {
  gulp
    .src(site.src)
    .pipe(pug({
      filename: 'index.html',
    }))
    .pipe(gulp.dest(site.dist))
  gulp
    .src(site.style)
    .pipe(stylus())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          "last 2 version",
          "iOS >= 8",
          "Android >= 5.0",
          "Firefox ESR"
        ],
        cascade: true
      })
    ]))
    .pipe(rename({
      basename: 'style',
      extname: '.css'
    }))
    .pipe(gulp.dest(source.site))
  cb()
}

function watch(cb) {
  gulp
    .watch(['src/**/*'])
    .on('change', () => build())
  cb()
}

function dev(cb) {
  gulp
    .watch(['site/**/*'])
    .on('change', () => render(cb))
  cb()
}

gulp.task('dev', gulp.series(
  build,
  gulp.parallel(
    watch
  )
))

gulp.task('dev:render', gulp.series(
  dev
))

gulp.task('build', gulp.series(
  build,
  minicss
))
