var myApp = angular.module("toDoListModule" , []);

myApp.controller("simpleController", function($scope){

// function simpleController ($scope) {
  $scope.toDoList = [
    {name: "Feed Cat"},
    {name: "Pay Comcast"},
    {name: "Get Gas"},

  ];


// $scope.addText = "addToDo";


$scope.addText = function() {
    $scope.toDoList.push({name:$scope.addToDo});
}

});
