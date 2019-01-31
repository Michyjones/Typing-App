var dataModule = (function(){
    var appData = {
        indicators: {
            testStarted: false, testEnded: false, totalTestTime: 0, timeLeft: 0
        },
        results: {
            wpm: 0, wpmChange: 0, cpm: 0, cpmChange:0, accurancy:0, accurancyChange: 0,
            numOfCorrectWords: 0, numOfCorrectCharacters: 0, numOfTestCharaacters: 0
        },
        words:{
            currentWordIndex: 0, testWords: [], currentWords: {}
        },
    };

var word = function(index){};

word.prototype.update = function(value){};
return{

    setTestTime: function(x){},
    IntialTimeLeft: function(){},
    StartTime: function(){},
    endTime: function(){},
    getTimeleft: function(){},
    reducetime: function(){},
    timeLeft: function(){},
    testEnded: function(){},
    testStarted: function(){},
    calculateWpm: function(){},
    calculateCpm: function(){},
    calculateAccurancy: function(){},
    fillListOfTestWords: function(textNumber){},
    getListOfTestWords: function(){},
    moveToNewWord: function(){},
    updateCureentWord: function(value){}
}

})();
