var gulp = require('gulp');
var gulpTypescript = require('gulp-typescript');
var typescript = require('typescript');
var merge = require('merge2');
//var webpack = require('webpack');
//var webpackStream = require('webpack-stream');
var path = require('path');
var foreach = require('gulp-foreach');
var stylus = require('gulp-stylus');
var nib = require('nib');
var liveReload = require('gulp-livereload');
var replace = require('gulp-replace');
//var gulpIf = require('gulp-if');
var pkg = require('./package.json');
var header = require('gulp-header');
var headerTemplate = '// <%= pkg.name %> v<%= pkg.version %>\n';

//gulp.task('default', ['tscGrid','tscNg2', 'testNg2'], watchTask);
gulp.task('default', ['tscNg2', 'testNg2'], watchTask);

//gulp.task('copyFromGrid', copyFromGrid);
//gulp.task('tscGrid', ['copyFromGrid'], tscGrid);
//gulp.task('stylusGrid', ['copyFromGrid'], stylusGrid);

gulp.task('copyFromNg2', copyFromNg2);
gulp.task('tscNg2', ['copyFromNg2'], tscNg2);
//gulp.task('tscNg2', ['tscGrid', 'copyFromNg2'], tscNg2);

gulp.task('testNg2', ['tscNg2'], testNg2);
//gulp.task('testNg2', ['tscNg2'], testNg2);

//gulp.task('webpack', ['webpackGrid'], liveReloadTask);
//gulp.task('webpackGrid', ['stylusGrid','tscGrid'], webpackGrid);

function watchTask() {
    liveReload.listen();
    //gulp.watch(['../ag-grid/src/**/*'], ['tscGrid']);
    gulp.watch(['../ag-grid-ng2/src/**/*'], ['tscNg2']);
    gulp.watch(['./app/*.ts'], ['testNg2']);
}

//function copyFromGrid() {
//    return gulp.src(['../ag-grid/*', '../ag-grid/src/**/*', '../ag-grid/dist/styles/**/*'], {base: '../ag-grid'})
//        .pipe(gulp.dest('./node_modules/ag-grid'));
//}

//function tscGrid() {
//    var tsResult = gulp
//        .src('./node_modules/ag-grid/src/ts/**/*.ts')
//        .pipe(gulpTypescript({
//            typescript: typescript,
//            module: 'commonjs',
//            experimentalDecorators: true,
//            emitDecoratorMetadata: true,
//            declarationFiles: true,
//            target: 'es5',
//            noImplicitAny: true
//        }));
//
//    return merge([
//        tsResult.dts
//            .pipe(gulp.dest('./node_modules/ag-grid/dist/lib')),
//        tsResult.js
//            .pipe(gulp.dest('./node_modules/ag-grid/dist/lib'))
//    ])
//}

function copyFromNg2() {
    return gulp.src(['../ag-grid-ng2/*', '../ag-grid-ng2/src/**/*'], {base: '../ag-grid-ng2'})
        .pipe(gulp.dest('./node_modules/ag-grid-ng2'));
}


function tscNg2() {
    var tsResult = gulp
        .src([
            // this solves the 'cannot resolve Promise' issue
            'typings/es6-shim/es6-shim.d.ts',
            './node_modules/ag-grid-ng2/src/**/*.ts'
        ])
        .pipe(gulpTypescript({
            typescript: typescript,
            module: 'commonjs',
            experimentalDecorators: true,
            emitDecoratorMetadata: true,
            declarationFiles: true,
            target: 'es5',
            noImplicitAny: true
        }));

    return merge([
        tsResult.dts
            .pipe(header(headerTemplate, { pkg : pkg }))
            .pipe(gulp.dest('./node_modules/ag-grid-ng2/lib')),
        tsResult.js
            .pipe(header(headerTemplate, { pkg : pkg }))
            .pipe(gulp.dest('./node_modules/ag-grid-ng2/lib'))
    ])
}

function testNg2() {
    var tsResult = gulp
        .src([
            // this solves the 'cannot resolve Promise' issue
            'typings/es6-shim/es6-shim.d.ts',
            './app/*.ts'
        ])
        .pipe(gulpTypescript({
            typescript: typescript,
            module: 'commonjs',
            experimentalDecorators: true,
            emitDecoratorMetadata: true,
            declarationFiles: true,
            target: 'es5',
            noImplicitAny: true
        }));

    return merge([
        tsResult.dts
            .pipe(header(headerTemplate, { pkg : pkg }))
            .pipe(gulp.dest('./output')),
        tsResult.js
            .pipe(header(headerTemplate, { pkg : pkg }))
            .pipe(gulp.dest('./output'))
    ])
}


//function stylusGrid() {
//    // Uncompressed
//    gulp.src(['./node_modules/ag-grid/src/styles/*.styl', '!./node_modules/ag-grid/src/styles/theme-common.styl'])
//        .pipe(foreach(function(stream, file) {
//            var currentTheme = path.basename(file.path, '.styl');
//            var themeName = currentTheme.replace('theme-','');
//            return stream
//                .pipe(stylus({
//                    use: nib(),
//                    compress: false
//                }))
//                .pipe(gulpIf(currentTheme !== 'ag-grid', replace('ag-common','ag-' + themeName)))
//                .pipe(gulp.dest('./node_modules/ag-grid/dist/styles/'));
//        }));
//}

//function liveReloadTask() {
//    return gulp.src('./gulpfile.js').pipe(liveReload());
//}

//function webpackGrid() {
//
//    var mainFile = './node_modules/ag-grid/main-with-styles.js';
//    var fileName = 'ag-grid.js';
//
//    return gulp.src('src/entry.js')
//        .pipe(webpackStream({
//            entry: {
//                main: mainFile
//            },
//            output: {
//                path: path.join(__dirname, "dist"),
//                filename: fileName,
//                library: ["agGrid"],
//                libraryTarget: "umd"
//            },
//            module: {
//                loaders: [
//                    { test: /\.css$/, loader: "style-loader!css-loader" }
//                ]
//            }
//        }))
//        .pipe(gulp.dest('./web-root/dist'));
//}
