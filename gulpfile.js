var gulp = require('gulp');
var concat = require('gulp-concat');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');

// gulp.task('test', () => {
//   return gulp.src('./test/*.js')
//     .pipe(babel({
//       presets: ['es2015']
//     }))
//     .pipe(concat('test.js'))
//     .pipe(gulp.dest('src/'));
// });

// gulp.task('compile', () => {
//   return gulp.src([
//     './controllers/waves6.js'
//     ])
//     .pipe(babel({
//       presets: ['es2015']
//     }))
//     .pipe(gulp.dest('src/'));
// });
gulp.task('runTests', () => {
  return gulp.src('test/*', {read: true})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}));
})

gulp.task('default', () => {
  gulp.watch([
    './controllers/**',
    './test/**'
    ], 
    ['runTests']);
})