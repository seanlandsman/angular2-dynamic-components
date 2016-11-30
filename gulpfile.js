var gulp = require('gulp');
var SystemBuilder = require('systemjs-builder');

gulp.task('aot-bundle', function () {
    var builder = new SystemBuilder();

    builder.loadConfig('./aot/systemjs.config.js')
        .then(function () {
            return builder.buildStatic('aot/app/boot-aot.js', './aot/dist/bundle.js', {
                encodeNames: false,
                mangle: false,
                minify: true,
                rollup: true,
                sourceMaps: true
            });
        })
});