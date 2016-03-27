angular.module("myTasks", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
        
        .when('/',{
            templateUrl: "views/buttonOne.html",
            controller: "bttnOneCtrl"
        })
        
        .when('/buttonTwo', {
            templateUrl: "views/buttonTwo.html",
            controller: "bttnTwoCtrl"
        })
        
        .when('/divThree', {
            templateUrl: "views/divThree.html",
            controller: "divThreeCtrl"
        })
        
        .when('/paraFour', {
            templateUrl: "views/paraFour.html",
            controller: "paraFourCtrl"
        })
        
        .when('/buttonFive', {
            templateUrl: "views/buttonFive.html",
            controller: "bttnFiveCtrl"
        })
        
        .when('/buttonSix', {
            templateUrl: "views/buttonSix.html",
            controller: "bttnSixCtrl"
        })
        
        .otherwise({
            redirectTo: '/'
        });
    }]);