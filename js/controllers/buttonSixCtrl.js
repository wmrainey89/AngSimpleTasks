angular.module("myTasks")

.controller("bttnSixCtrl", buttonSixController);

buttonSixController.$inject = ["$scope"];

function buttonSixController($scope){
    $scope.frame = function(){
        var friends = ['Jessica', 'James', 'Will', 'Jordan', 'Sherona', 'Lacey', 'Lucas', 'Layla', 'Laura Beth', 'Lola'];
        for(var i = 0; i < friends.length; i++){
            var friendLi = $("<li></li>").text(friends[i]);
            $("#friend").append(friendLi);
        }
    }
}