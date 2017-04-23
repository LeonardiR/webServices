"use strict";

var app = angular.module("myApp", [
    "firebase", "myApp.config", "myApp.filters", "myApp.services",
    "myApp.directives", "myApp.controllers"
]);

// configure views
app.config(["$routeProvider",
    function ($routeProvider) {

        $routeProvider.when("/register", {
            templateUrl: "partials/register.html",
            controller: "registerCtrl"
        });
        $routeProvider.when("/userList", {
            templateUrl: "partials/userList.html",
            controller: "userCtrl"
        });
        $routeProvider.when("/groupList", {
            templateUrl: "partials/groupsList.html",
            controller: "groupCtrl"
        });

        $routeProvider.otherwise({redirectTo: "/userList"});

    }
]);

