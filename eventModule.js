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
            var timeLeft = dModule.getTimeleft();
            uModule.updateTimeLeft(timeLeft);
            addEventListeners();
        }
    };
})(dataModule, UIModule, wordsModule, certificateModule);
