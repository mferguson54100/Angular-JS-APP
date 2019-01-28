let app = angular.module("HangmanApp",[]);
//define controller 
app.controller("GameController",['$scope',function($scope){

    let words =["pants","shorts","ferg","loud","peace"];
    
    $scope.incorrectLettersChosen=[];
    $scope.correctLetters=[];


}]);