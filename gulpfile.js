var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    minicss = require('gulp-minify-css'),
    rename = require('gulp-rename')

gulp.task('build', function () {
    gulp.src('src/base.styl')
        .pipe(concat('syuanpi.styl'))
        .pipe(stylus())
        .pipe(gulp.dest('dist/'))
})

gulp.task('build:w', ['build'], function() {
    gulp.watch(['src/*.styl', 'src/animation/*/**.styl'], ['build'])
});

gulp.task('minicss', function () {
    gulp.src('src/base.styl')
        .pipe(concat('syuanpi.styl'))
        .pipe(stylus())
        .pipe(rename({suffix: '.min'}))
        .pipe(minicss())
        .pipe(gulp.dest('dist/'))
})

gulp.task('default', function() {
    gulp.start('build', 'minicss')
})
