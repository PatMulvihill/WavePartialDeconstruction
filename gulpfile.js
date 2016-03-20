const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const webpack = require('webpack-stream');
const eslint = require('gulp-eslint');

gulp.task('lintClient', () => {
  return gulp.src(['client/**', '!node_modules/**'])
    .pipe(eslint(require('./.eslintrc.json')))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('webpackClient', () => {
  return gulp.src('client/index.jsx')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('public/'));
});

gulp.task('client', () => {
  gulp.watch('client/**',
    ['lintClient',
    'webpackClient']);
});

gulp.task('runTests', () => {
  return gulp.src('test/*', {read: true})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}));
})

gulp.task('watchForTests', () => {
  gulp.watch([
    './controllers/**',
    './test/**'
    ],
    ['runTests']);
})
