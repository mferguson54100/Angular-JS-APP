let app = angular.module("HangmanApp",[]);
//define controller 
app.controller("GameController",['$scope',function($scope){
//array of words 
    let words =["pants","shorts","ferg","loud","peace"];
    
    $scope.incorrectLettersChosen=[];
    $scope.correctLetters=[];
    $scope.numberOfGuesses =6;
    $scope.displayWord ='';
    $scope.input={
        letter:''
    }
    //selects a word out of the words array at random 
    let selectRandomWord = function(){
        let index = Math.round(Math.random()*words.length);
        Math.round(index);
        return words[index];

    }
    //creates a new instance of a game 
let newGame = function(){
    $scope.incorrectLettersChosen =[];
    $scope.correctLetters =[];
    $scope.numberOfGuesses =6;
    $scope.displayWord ='';
    $scope.input={
        letter:''
    }

    selectedWord = selectRandomWord();
    let hiddenWordDisplay ='';
    for(let i = 0; i < selectedWord.length; i++) {
        hiddenWordDisplay +='*';
    }
    $scope.displayWord = hiddenWordDisplay;
    
}
newGame();


}]);