var gulp  = require('gulp'),
  stylus  = require('gulp-stylus'),
  concat  = require('gulp-concat'),
  rename  = require('gulp-rename'),
  postcss = require('gulp-postcss')

var path = require('path')
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')
var source = {
  src: path.join('src', '_base.styl'),
  dist: path.join('dist')
}

function build(cb) {
  return gulp
    .src(source.src)
    .pipe(stylus())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          "last 2 version",
          "iOS >= 8",
          "Android >= 5.0"
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

function minicss(cb) {
  return gulp
    .src(path.join(source.dist, 'syuanpi.css'))
    .pipe(postcss([cssnano()]))
    .pipe(rename({
      basename: 'syuanpi',
      suffix: '.min',
      extname: '.css'
    }))
    .pipe(gulp.dest(source.dist))
}

function watch(cb) {
  gulp
    .watch(['src/*/**.styl'])
    .on('change', file => build(cb))
  cb()
}

gulp.task('dev', gulp.series(
  build,
  gulp.parallel(
    watch
  )
))

gulp.task('build', gulp.series(
  build,
  minicss
))
