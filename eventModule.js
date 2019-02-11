var eventModule = (function(dModule, uModule, wModule, cModule) {
  var addEventListeners = function() {};
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
          }
          var typedWord = uModule.getTypedWord();
          dModule.updateCureentWord(typedWord);

          var currentWord = dModule.getCurrentWord();
          uModule.formatWord(currentWord);
        });
      addEventListeners();
    }
  };
})(dataModule, UIModule, wordsModule, certificateModule);
