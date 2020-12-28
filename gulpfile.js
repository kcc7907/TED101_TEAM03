const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const imagemin = require('gulp-imagemin');
// const uglify = require('gulp-uglify');
const uglify = require('gulp-uglify-es').default;
const clean = require('gulp-clean');
const ftp = require('vinyl-ftp');

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
    src(['./sass/08/**', './sass/13/**', './sass/14/**', './sass/15/**', './sass/19/**', './sass/20/**'])
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
    // watch('./sass/*.scss', exports.toCss).on('change', reload)
}

//壓縮js
exports.minjs = cb => {
    src('js/**')
        .pipe(uglify())
        // .pipe(rename({extname: 'min.js'}))
        .pipe(dest('dist'));
    cb();
}

// 刪除'/CSS','dist/'
exports.clear = cb => {
    src(['css/', 'dist/'], { read: false, allowEmpty: true })
        .pipe(clean());
    cb()
}

//upload to ftp
exports.toFtp = cb => {
    var conn = ftp.create({
        host: '140.115.236.71',
        user: '!ted101@#',
        password: '@123???#',
        parallel: 10,
    });
    var globs = [
        '../TED101_TEAM03/backend/**',
        '../TED101_TEAM03/css/**',
        '../TED101_TEAM03/font/**',
        '../TED101_TEAM03/frontend/**',
        '../TED101_TEAM03/index.html',
        '../TED101_TEAM03/js/**',
        '../TED101_TEAM03/lib/**',
        '../TED101_TEAM03/php/**',
        // '../TED101_TEAM03/img/**',
    ];
    src(globs, { base: '.', buffer: false })
        .pipe(conn.newer('/05.專題程式/TED101_G3/'))
        .pipe(conn.dest('/05.專題程式/TED101_G3/'))
    cb();
};

//轉成php
exports.tophp = cb => {
    src(['frontend/**', 'backend/**'])
        .pipe(rename({
            extname: '.php'
        })).pipe(dest('dist/'));
    cb()
}

exports.imgmin = cb => {
    src('./img/**')
    .pipe(imagemin())
    .pipe(dest('images'));
    cb()
}

function ugjs(cb) {
    src('./js/20/**.js')
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('dist/20'));
    cb()
}

exports.ug = ugjs