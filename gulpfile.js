const gulp = require('gulp');
const sass = require('gulp-sass');

const path = {
    sass: './src/**/*.scss'
};

gulp.task('sass', () => {
    gulp.src(path.sass)
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', () => {
    gulp.watch(path.sass, [sass]);
});