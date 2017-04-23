"use strict";
var app = angular.module("myApp.config", []);


var config = {
    apiKey: "AIzaSyBNuvvUkC2a9dA-rNIXNQySMuQbzo73efY",
    authDomain: "webservices-5dab5.firebaseapp.com",
    databaseURL: "https://webservices-5dab5.firebaseio.com",
    projectId: "webservices-5dab5",
    storageBucket: "webservices-5dab5.appspot.com",
    messagingSenderId: "652730301315"
};
firebase.initializeApp(config);


