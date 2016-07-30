var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./src"
    });
});

// the real action
gulp.task('default', ['serve'], function () {
    gulp.watch("./src/**/*.scss", ['sass']);

    gulp.watch('./src/**/*.html', browserSync.reload);
    gulp.watch('./src/**/*.js', browserSync.reload);
    gulp.watch('./src/**/*.css', browserSync.reload);
});
