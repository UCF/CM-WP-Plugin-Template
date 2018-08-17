var browserSync = require('browser-sync').create(),
    gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    include = require('gulp-include'),
    eslint = require('gulp-eslint'),
    isFixed = require('gulp-eslint-if-fixed'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint'),
    uglify = require('gulp-uglify'),
    merge = require('merge');


var configLocal = require('./gulp-config.json'),
    configDefault = {
      src: {
        scssPath: './src/scss',
        jsPath:   './src/js'
      },
      dist: {
        cssPath:  './static/css',
        jsPath:   './static/js',
        fontPath: './static/fonts'
      },
      packagesPath: './node_modules',
      sync: false,
      syncTarget: 'http://localhost/wordpress/'
    },
    config = merge(configDefault, configLocal);


//
// Helper functions
//

// Base SCSS linting function
function lintSCSS(src) {
  return gulp.src(src)
    .pipe(sassLint())
    .pipe(sassLint.failOnError());
}

// Base SCSS compile function
function buildCSS(src, dest) {
  dest = dest || config.dist.cssPath;

  return gulp.src(src)
    .pipe(sass({
      includePaths: [config.src.scssPath, config.packagesPath]
    })
      .on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer({
      // Supported browsers added in package.json ("browserslist")
      cascade: false
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(dest))
}

// Base JS linting function (with eslint). Fixes problems in-place.
function lintJS(src, dest) {
  dest = dest || config.src.jsPath;

  return gulp.src(src)
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(isFixed(dest));
}

// Base JS compile function
function buildJS(src, dest) {
  dest = dest || config.dist.jsPath;

  return gulp.src(src)
    .pipe(include({
      includePaths: [config.packagesPath, config.src.jsPath]
    }))
    .on('error', console.log)
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(dest));
}

// BrowserSync reload function
function serverReload(done) {
  if (config.sync) {
    browserSync.reload();
  }
  done();
}

// BrowserSync serve function
function serverServe(done) {
  if (config.sync) {
    browserSync.init({
      proxy: {
        target: config.syncTarget
      }
    });
  }
  done();
}


//
// Installation of components/dependencies
//

// Athena Framework web font processing
gulp.task('move-components-athena-fonts', function(done) {
  gulp.src([config.packagesPath + '/ucf-athena-framework/dist/fonts/**/*'])
    .pipe(gulp.dest(config.dist.fontPath));
  done();
});

// Run all component-related tasks
gulp.task('components', gulp.parallel(
  'move-components-athena-fonts'
));


//
// CSS
//

// Lint all theme scss files
gulp.task('scss-lint-theme', function() {
  return lintSCSS(config.src.scssPath + '/*.scss');
});

// Compile theme stylesheet
gulp.task('scss-build-theme', function() {
  return buildCSS(config.src.scssPath + '/style.scss');
});

// All theme css-related tasks
gulp.task('css', gulp.series('scss-lint-theme', 'scss-build-theme'));


//
// JavaScript
//

// Run eshint on js files in src.jsPath
gulp.task('es-lint-theme', function() {
  return lintJS([config.src.jsPath + '/*.js'], config.src.jsPath);
});

// Concat and uglify js files through babel
gulp.task('js-build-theme', function() {
  return buildJS(config.src.jsPath + '/script.js', config.dist.jsPath);
});

// All js-related tasks
gulp.task('js', gulp.series('es-lint-theme', 'js-build-theme'));


//
// Rerun tasks when files change
//
gulp.task('watch', function() {
  serverServe();

  gulp.watch(config.src.scssPath + '/**/*.scss', gulp.series('css', serverReload));
  gulp.watch(config.src.jsPath + '/**/*.js', gulp.series('js', serverReload));
  gulp.watch('./**/*.php', gulp.series(serverReload));
});


//
// Default task
//
gulp.task('default', gulp.series('components', 'css', 'js'));
