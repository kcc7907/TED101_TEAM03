const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');

//增加前綴
exports.prefix = cb => {
    src('css/**')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest('css/'));
    cb();
}

//sass轉譯
exports.toCss = cb => {
    src('./sass/**')
        .pipe(sass().on('error', sass.logError))
        // .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(dest('./css'));
    cb();
}

//開網域 && watch
exports.default = function browser() {
    browserSync.init({
        server: {
            baseDir: "../TED101_TEAM03",
            index: 'index.html'
        },
        port: 5566
    });
    watch('./sass/*.scss', exports.toCss).on('change', reload)
}

//壓縮js
exports.minJs = cb => {
    src('js/**/*.js')
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        })).pipe(dest('dist/'));
    cb()
}

// 刪除'/CSS','dist/'
exports.clear = cb => {
    src(['css/', 'dist/'], { read: false, allowEmpty: true })
        .pipe(clean());
    cb()
}