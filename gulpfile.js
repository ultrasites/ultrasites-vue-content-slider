var gulp = require('gulp');
var csslint = require('gulp-csslint');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var eslint = require ('gulp-eslint');


gulp.task('watch', function() {
    gulp.watch(['examples/**', 'component/**/*'], ['build'])
});

gulp.task('build', function() {

    //SASS
    gulp.src('component/style/*.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest('dist/component/style'));

    //Component
    gulp.src('component/*.vue')
        .pipe(eslint({configFile: 'eslint.json'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/component/'));

    //Vendor
    gulp.src('node_modules/vue/dist/vue.js')
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist'));

    //Examples
    gulp.src('examples/**')
        .pipe(gulp.dest('dist'));
});