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
  gulp.watch('client/**', ['lintClient',
    'webpackClient'
  ]);
});

gulp.task('testControllers', () => {
  return gulp.src('test/*', {
      read: true
    })
    // gulp-mocha needs filepaths so you can't have any plugins before it
    .pipe(mocha({
      reporter: 'nyan'
    }));
})

gulp.task('lintControllers', () => {
  return gulp.src(['./controllers/**',
      '!node_modules/**'
    ])
    .pipe(eslint(require('./.eslintrc.json')))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}) 
gulp.task('lintTests', () => {
  return gulp.src(['./test/**',
      '!node_modules/**'
    ])
    .pipe(eslint(require('./.eslintrc.json')))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
})

gulp.task('tests', () => {
  gulp.watch([
    './controllers/**',
    './test/**'
  ], ['testControllers', 'lintTests','lintControllers']);
})
