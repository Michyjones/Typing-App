var eventModule = (function(dModule, uModule, wModule, cModule) {
  var addEventListeners = function() {};
  uModule
    .getDOMElement()
    .textInput.addEventListener('keydown', function(event) {
      if (dModule.testEnded()) {
        return;
      }
      var key = event.keyCode;
      if (key == 13) {
        uModule.getDOMElement().textInput.value +=
          dModule.getReturnLine() + ' ';
        var inputEvent = new Event('input');
        uModule.getDOMElement().textInput.dispatchEvent(inputEvent);
      }
    });
  window.addEventListener('resize', uModule.scroll);
  return {
    init: function(duration, textNumber) {
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
      uModule
        .getDOMElement()
        .textInput.addEventListener('input', function(event) {
          if (dModule.testEnded()) {
            return;
          }
          if (!dModule.testStarted()) {
            dModule.StartTest();
            var counter = setInterval(function() {
                var results = {};
                [results.wpm, results.wpmChange] = dModule.calculateWpm();
                [results.cpm, results.cpmChange] = dModule.calculateCpm();
                dModule.returnData();
          if (dModule.timeLeft()){
              var timeLeft = dModule.reduceTime();
              uModule.updateTimeLeft(timeLeft); 
          }
            }, 1000);

          }
          var typedWord = uModule.getTypedWord();
          dModule.updateCureentWord(typedWord);

          var currentWord = dModule.getCurrentWord();
          uModule.formatWord(currentWord);
          if (
            uModule.spacePressed(event) ||
            uModule.enterPressed(dModule.getReturnLine())
          ) {
            uModule.emptyInput();
            uModule.deactivateCurrentWord();
            dModule.moveToNewWord();
            var index = dModule.getCurrentWordIndex();
            uModule.setActiveWord(index);
            var currentWord = dModule.getCurrentWord();
            uModule.formatWord(currentWord);
            uModule.scroll();
          }
        });
      addEventListeners();
    }
  };
})(dataModule, UIModule, wordsModule, certificateModule);
