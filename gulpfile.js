'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
//var _msbuild = require('msbuild');
var argv = require('yargs').argv;
var clean = require('gulp-clean');
//var sourcemaps = require('gulp-sourcemaps');

//说明
gulp.task('help', function () {
    console.log('gulp sass                   编译sass');
    console.log('gulp minifyjs               压缩js');
    console.log('gulp watch                  监视sass和js');
    console.log('gulp build                  编译sass和js');
    console.log('gulp help                   gulp参数说明');
});

//默认
gulp.task('default', function () {
    gulp.start('help');
});

//编译sass
gulp.task('sass', function () {
    return gulp.src('./source/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./source/'))
        //.pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        //.pipe(sourcemaps.write('../map/style/'))       //sourcemaps
        .pipe(gulp.dest('./source/'));
});

//压缩js
gulp.task("minifyjs", function () {
        gulp.src(['./source/**/*.js', '!./source/**/*.min.js'])  //需要操作的文件
        //.pipe(sourcemaps.init())
        //.pipe(gulp.dest('./dist/'))       //输出到文件夹
        .pipe(uglify())                          //压缩
        .pipe(rename({ suffix: '.min' }))        //rename压缩后的文件名
        //.pipe(sourcemaps.write('../map/script/'))       //sourcemaps
        .pipe(gulp.dest('./source/'));      //输出
});

//监视
gulp.task('watch', function () {
    var watchersass = gulp.watch('./source/**/*.scss');
    watchersass.on('change', function (event) {
        gulp.start('sass');
        console.log('File ' + event.path + ' was ' + event.type + ', running task sass');
    });

    var watcherjs = gulp.watch('./source/**/*.js');
    watcherjs.on('change', function (event) {
        gulp.start('minifyjs');
        console.log('File ' + event.path + ' was ' + event.type + ', running task minifyjs');
    });
});

//清理
// gulp.task("clean", function () {
//     return gulp.src(['./dist/style/', './dist/script/', './dist/map/'])      //需要操作的文件
//         .pipe(clean());
// });

//生成项目
gulp.task("build", function () {
    gulp.start("sass");
    gulp.start("minifyjs");
});

