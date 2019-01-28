let app = angular.module("HangmanApp",[]);
//define controller 
app.controller("GameController",['$scope',function($scope){

    let words =["pants","shorts","ferg","loud","peace"];
    
    $scope.incorrectLettersChosen=[];
    $scope.correctLetters=[];
    $scope.numberOfGuesses =6;
    $scope.displayWord='';
    $scope.input={
        letter:''
    }

    let selectRandomWord = function(){
        let index = Math.round(Math.random()*words.length);
        return words[index];

    }
let newGame = function(){
    $scope.incorrectLettersChosen =[];
    $scope.correctLetters =[];
    $scope.numberOfGuesses =6;
    $scope.displayWord='';
    $scope.input={
        letter:''
    }

    selectedWord = selectRandomWord();
    console.log(selectedWord);

}
newGame();


}]);