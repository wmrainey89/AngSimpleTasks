
angular.module("myTasks")

.controller("bttnTwoCtrl", buttonTwoController);

buttonTwoController.$inject = ["$scope"];

function buttonTwoController($scope){
    $scope.message = function(){
        alert($scope.text);
    }
}
