angular.module("myTasks")

.controller("paraFourCtrl", paraFourController);

paraFourController.$inject = ["$scope"];

function paraFourController($scope){
    $scope.toad = function(){
       var rain = ['#374f0f', '#52a373', '#1f40a0', '#8791c9', '#41abb8', '#1daa9b', '#ff9999'];
       var randomColor = rain[Math.floor(Math.random()* rain.length)];
       $("#horn").css("color", randomColor);
    }
}