"use strict";
/**
 * Para criar: name, email, password
 */
exports.__esModule = true;
function createUser(_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, email = _a.email, password = _a.password;
    var user = {
        name: name,
        email: email,
        password: password
    };
    return user;
}
exports["default"] = createUser;
