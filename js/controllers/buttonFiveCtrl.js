angular.module("myTasks")

.controller("bttnFiveCtrl", buttonFiveController);

buttonFiveController.$inject = ["$scope"];

function buttonFiveController($scope){
    $scope.five = function() {
        $("#blank").append("<span>William McKenzie Rainey</span>");
    }
}