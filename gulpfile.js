/**
 * Created by clairton on 30/03/16.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    clean = require('gulp-clean'),
    nodemon = require('gulp-nodemon'),
    runSequence = require('run-sequence'),
    cleanCss = require('gulp-clean-css');

gulp.task('default', ['start']);

gulp.task('dist', function (cb) {
    return runSequence('clean', ['jshint:client', 'html', 'css', 'fonts', 'js', 'images'], cb);
});

gulp.task('start', ['dist'], function () {
    gulp.watch('public/**/*', ['dist']);
    nodemon({
        script: 'server.js'
        , ext: 'html js css'
        , ignore: ['dist/**/*', 'public/**/*', 'bower_components/**/*', 'node_modules/**/*', 'gulpfile.js']
        , tasks: ['jshint:server']
    })
        .on('restart', function () {
            console.log('restarted!')
        })
});

gulp.task('clean', function () {
    return gulp.src('dist/')
        .pipe(clean());
});

gulp.task('jshint:client', function () {
    gulp.src('public/js/**/*.js')
        .pipe(jshint());
});

gulp.task('jshint:server', function () {
    gulp.src('app/**/*.js')
        .pipe(jshint());
});

gulp.task('html', function () {
    return gulp.src('public/**/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('images', function () {
    return gulp.src('public/img/**/*')
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('js', ['scripts', 'libs']);

gulp.task('scripts', function () {
    return gulp.src('public/js/**/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('libs', function () {
    return gulp.src([
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-resource/angular-resource.min.js',
            'bower_components/angular-validation-match/dist/angular-validation-match.min.js',
            'public/libs/js/**/*.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('css', ['styles', 'libStyles']);

gulp.task('styles', function () {
    return gulp.src('public/css/**/*.css')
        .pipe(concat('styles.min.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('libStyles', function () {
    return gulp.src([
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/font-awesome/css/font-awesome.min.css',
            'public/libs/css/**/*.css'])
        .pipe(concat('libs.min.css'))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('fonts', function () {
    return gulp.src([
        'bower_components/bootstrap/dist/fonts/*',
        'bower_components/font-awesome/fonts/*'
    ])
        .pipe(gulp.dest('dist/fonts/'));
});
