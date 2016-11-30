(function (global) {
    System.config({
            defaultJSExtensions: true,
            map: {
                'app': 'lib',
                // angular bundles
                '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
                '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
                '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
                '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
                '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
                '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
                // other libraries
                'rxjs': 'node_modules/rxjs'
            },
            packages: {
                lib: {
                    main: './boot.js'
                }
            }
        }
    );
})(this);