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
    $scope.letterChosen = function(){

    for(let i =0; i< $scope.correctLetters.length; i++){
        if($scope.correctLetters[i].toLowerCase() ===$scope.input.letter.toLowerCase()){
            $scope.input.letter="";
            return;
        }
    }
        for(let i =0; i< $scope.incorrectLettersChosen.length; i++){
            if($scope.incorrectLettersChosen[i].toLowerCase() === $scope.input.letter.toLowerCase()){
                $scope.input.letter="";
                return;
            }
        
    }
    let correct = false;
    for(let i =0; i< selectedWord.length; i++){
        if(selectedWord[i].toLowerCase() ===$scope.input.letter.toLowerCase()){
            $scope.displayWord = $scope.displayWord.slice(0,i) + $scope.input.letter.toLowerCase()+$scope.displayWord.slice(i +1);
            correct = true;

        }
    }
    if(correct){
        $scope.correctLetters.push($scope.input.letter.toLowerCase());
        
        
        
    }if(!correct){
        $scope.incorrectLettersChosen.push($scope.input.letter.toLowerCase());
        
    }
}

newGame();



}]);