const gulp = require('gulp'),
      sass = require('gulp-sass'),
      prefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create();

const path = {
    dist: {
        self: "./dist/",
        html: "dist/",
        css: "dist/css/"
    },
    src: {
        html: "src/**/*.html",
        scss: "src/scss/style.scss"
    },
    watch: {
        scss: "src/**/*.scss"
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

const watcher = () => {
    browserSync.init({
        server: {
            baseDir: path.dist.self
        }
    });

    gulp.watch(path.src.html, buildHTML).on('change', browserSync.reload);
    gulp.watch(path.watch.scss, buildSCSS).on('change', browserSync.reload);
};

/*** CREATING TASKS ***/
gulp.task('html', buildHTML);
gulp.task('scss', buildSCSS);

gulp.task('default', gulp.series(
    buildHTML,
    buildSCSS,
    watcher
));