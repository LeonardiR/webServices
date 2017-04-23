"use strict";

/**
 * Config module which defines Firebase URL.
 * @module myApp/config
 */
var app = angular.module("myApp.config", []);

// your Firebase URL goes here
var config = {
    apiKey: "AIzaSyBNuvvUkC2a9dA-rNIXNQySMuQbzo73efY",
    authDomain: "webservices-5dab5.firebaseapp.com",
    databaseURL: "https://webservices-5dab5.firebaseio.com",
    projectId: "webservices-5dab5",
    storageBucket: "webservices-5dab5.appspot.com",
    messagingSenderId: "652730301315"
};
firebase.initializeApp(config);


