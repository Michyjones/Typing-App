var eventModule = (function(dModule, uModule, wModule, cModule){
    var addEventListeners = function(){

    };
    return{
        init: function(duration, textNumber){
            var words = wModule.getWords(textNumber);
            dModule.fillListOfTestWords(textNumber, words);

            var returnLine = dModule.getReturnLine();
            var testWords = dModule.getListOfTestWords();
            uModule.fillContent(testWords, returnLine);
            dModule.setTestTime(duration);
            dModule.IntialTimeLeft();
            dModule.moveToNewWord();
            var timeLeft = dModule.getTimeleft();
            uModule.updateTimeLeft(timeLeft);
            var index = dModule.getCurrentWordIndex();
            uModule.setActiveWord(index);
            var currentWord = dModule.getCurrentWord();
            uModule.formatWord(currentWord);
            uModule.inputFocus();
            addEventListeners();
        }
    };
})(dataModule, UIModule, wordsModule, certificateModule);
