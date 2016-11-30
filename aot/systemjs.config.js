(function (global) {
    System.config({
            defaultJSExtensions: true,
            map: {
                // angular bundles
                '@angular/core': 'node_modules/@angular/core',
                '@angular/common': 'node_modules/@angular/common',
                '@angular/compiler': 'node_modules/@angular/compiler/index.js',
                '@angular/platform-browser': 'node_modules/@angular/platform-browser',
                '@angular/forms': 'node_modules/@angular/forms',
                '@angular/router': 'node_modules/@angular/router',
                // other libraries
                'rxjs': 'node_modules/rxjs'
                // 'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            },
            packages: {
                '@angular/core': {
                    main: 'index.js'
                },
                '@angular/common': {
                    main: 'index.js'
                },
                '@angular/platform-browser': {
                    main: 'index.js'
                },
                '@angular/forms': {
                    main: 'index.js'
                },
                '@angular/router': {
                    main: 'index.js'
                }
            }
        }
    );
})(this);