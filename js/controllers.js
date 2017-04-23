"use strict";

var app = angular.module("myApp.controllers", []);

//Register controller
app.controller("registerCtrl", function ($scope, $location, $firebaseArray) {

    $scope.formUser = {
        "id": "",
        "name": "",
        "surname": "",
        "alias": "",
        "group": "",
        "age": 0,
        "phone": 0
    };

    $scope.createNewUser = function() {

        var $btn = $("#signUpButton").button("loading");
        if($scope.formUser.name && $scope.formUser.surname && $scope.formUser.alias && $scope.formUser.group){
            var refUser = firebase.database().ref("users/");
            var userArray = $firebaseArray(refUser);
            userArray.$add($scope.formUser);

            $scope.formGroup = {
                "alias": $scope.formUser.alias,
                "group": $scope.formUser.group
            };

            var refGroups = firebase.database().ref("groups/");
            var groupArray = $firebaseArray(refGroups);
            groupArray.$add($scope.formGroup);
            $location.path("/userList");
            }
        else{
            $scope.error = error;
            }
        $btn.button("reset");
    };
});

// User controller
app.controller("userCtrl", function($scope, $firebaseArray) {
    var ref = firebase.database().ref("users/");
    $scope.results = $firebaseArray(ref);
    }
);

// Group controller
app.controller("groupCtrl", function($scope, $firebaseArray) {
    var groupRef = firebase.database().ref("groups/");
    $scope.results = $firebaseArray(groupRef);
    }
);