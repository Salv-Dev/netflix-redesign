'use strict';

let gulp = require('gulp');
let concat = require('gulp-concat');
let autoprefixer = require('gulp-autoprefixer');
let cssimport = require('gulp-cssimport')
let rename = require('gulp-rename');
let csso = require('gulp-csso');
let del = require('del');
let uglify = require('gulp-uglify');

// Gulp task to minify CSS files

function styles() {
    return gulp.src('./styles/styles.css')
        .pipe(cssimport({ 
            includePaths: [
                './styles',
            ]
        }))
        .pipe(autoprefixer('last 1 version', '> 1%', 'ie 8', 'ie 7'))
        .pipe(csso())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'));
};

// Gulp task to minify Javascript files

function scripts() {
    return gulp.src('./scripts/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'));
};

// Gulp task for clean output directory
function clean() { return del(['dist']) };

// Gulp task to minify all files
exports.default = gulp.series(clean, gulp.parallel(styles, scripts));