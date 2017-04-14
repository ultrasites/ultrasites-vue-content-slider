var gulp = require('gulp');
var csslint = require('gulp-csslint');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('watch', function() {
    gulp.watch(['examples/**', 'component/**/*'], ['build'])
});

gulp.task('build', function() {

    //Style
    gulp.src('component/style/*.css')
        .pipe(csslint())
        .pipe(csslint.formatter())
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
         }))
        .pipe(gulp.dest('dist/component/style'));


    //Component
    gulp.src('component/*.vue')
        .pipe(uglify())
        .pipe(gulp.dest('dist/component/'));

    //Vendor
    gulp.src(['node_modules/vue/dist/vue.js','node_modules/jquery/dist/jquery.js'])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist'));

    //Examples
    gulp.src('examples/**')
        .pipe(gulp.dest('dist'));
});