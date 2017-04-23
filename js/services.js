"use strict";

var app = angular.module("myApp.services", ["firebase"]);
app.value("version", "1.1.0");
app.factory("Auth", function($firebaseAuth) {
    return $firebaseAuth();
  }
);