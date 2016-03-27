angular.module("myTasks")

.controller("divThreeCtrl", divThreeController);

divThreeController.$inject = ["$scope"];

function divThreeController($scope){
    $scope.change = function(){
       var changes = ['#374f0f', '#52a373', '#1f40a0', '#8791c9', '#41abb8', '#1daa9b', '#ff9999'];
       var randomColor = changes[Math.floor(Math.random()* changes.length)];
       $("#colors").css("background-color", randomColor);     
    }
    
    $scope.changed = function(){
        $("#colors").css("background-color", "");
    }
}