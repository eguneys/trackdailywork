let cleanCss = require('gulp-clean-css');
let rename = require('gulp-rename');
let gulp = require('gulp');
let { src, dest } = require('gulp');

const sourcesGlob = './*/css/*.css';
const outputDir = '../public/css';

function dev(cb) {

  gulp.src(sourcesGlob)
    .pipe(rename({dirname: '', extname: '.dev.css' }))
    .pipe(dest(outputDir));

  cb();
}

function prod(cb) {
  gulp.src(sourcesGlob)
    .pipe(cleanCss())
    .pipe(rename({dirname: '', extname: '.min.css' }))
    .pipe(dest(outputDir));

  cb();
}

exports.prod = prod;
exports.dev = dev;
exports.default = dev;
