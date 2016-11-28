/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var utils_1 = require('../common/utils');
var fs;
try {
    fs = require('fs');
}
catch (err) {
}
// TODO(alxhub): Patch `watch` and `unwatchFile`.
var TO_PATCH = [
    'access', 'appendFile', 'chmod', 'chown', 'close', 'exists', 'fchmod',
    'fchown', 'fdatasync', 'fstat', 'fsync', 'ftruncate', 'futimes', 'lchmod',
    'lchown', 'link', 'lstat', 'mkdir', 'mkdtemp', 'open', 'read',
    'readdir', 'readFile', 'readlink', 'realpath', 'rename', 'rmdir', 'stat',
    'symlink', 'truncate', 'unlink', 'utimes', 'write', 'writeFile',
];
if (fs) {
    TO_PATCH.filter(function (name) { return !!fs[name] && typeof fs[name] === 'function'; }).forEach(function (name) {
        fs[name] = (function (delegate) {
            return function () {
                return delegate.apply(this, utils_1.bindArguments(arguments, 'fs.' + name));
            };
        })(fs[name]);
    });
}
//# sourceMappingURL=fs.js.map