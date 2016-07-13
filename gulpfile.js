var gulp = require('gulp');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

// gulp.task("es6", function () {
//   return gulp.src("./simple_es6/**/*.jsx")
//     .pipe(sourcemaps.init())
//     .pipe(babel())
//     .pipe(concat("*.js"))
//     .pipe(sourcemaps.write("."))
//     .pipe(gulp.dest("./simple_es6/"));
// });

gulp.task("js", function () {
  return gulp.src("./simple_es6/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./simple_es6/dist"));
});

gulp.task("react", function(){
    return gulp.src(["./react_es6/*.js","./react_es6/**/*.jsx"])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./react_es6"));
});

gulp.task('watch', function(){
    gulp.watch('./simple_es6/**/*.js',['js']);
});
