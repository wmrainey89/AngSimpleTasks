   
angular.module("myTasks")

.controller("bttnOneCtrl", buttonOneController);

buttonOneController.$inject = ["$scope"];

function buttonOneController($scope){
    $scope.nice = function(){
        alert("Very Nice! How Much?");
    }
}
