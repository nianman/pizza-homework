const gulp = require('gulp'),
      sass = require('gulp-sass'),
      prefixer = require('gulp-autoprefixer');

const path = {
    dist: {
        html: "dist/",
        css: "dist/css/"
    },
    src: {
        html: "src/**/*.html",
        scss: "src/scss/style.scss"
    }
};

/*** CREATING FUNCTIONS ***/
const buildHTML = () => (
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.dist.html))
);
const buildSCSS = () => (
    gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer({
            cascade: false
        }))
        .pipe(gulp.dest(path.dist.css))
);

/*** CREATING TASKS ***/
gulp.task('html', buildHTML);
gulp.task('scss', buildSCSS);

gulp.task('default', gulp.series(
    buildHTML,
    buildSCSS
));