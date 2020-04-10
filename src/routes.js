"use strict";
exports.__esModule = true;
var CreateUser_1 = require("./services/CreateUser");
function helloWorld(request, response) {
    var user = CreateUser_1["default"]({
        name: 'Rodrigo Garcia',
        email: 'rgflsc@gmail.com',
        password: '123456'
    });
    return response.json(user);
}
exports.helloWorld = helloWorld;
