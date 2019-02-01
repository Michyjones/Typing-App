var dataModule = (function() {
  var returnLine = '|';
  var shuffle = function(array) {
    var newArray = [];
    var randomIndex;
    var randomElement;
    while (array.length > 0) {
      randomIndex = Math.floor(Math.random() * array.length);
      randomElement = array[randomIndex];
      newArray.push(randomElement);
      array.splice(randomElement, 1);
    }
    return newArray;
  };
  String.prototype.capitalize = function() {
    var newString = '';
    var firstCharacter = this.charAt(0).toUpperCase();
    var othercharacter = this.slice(1);
    newString = firstCharacter + othercharacter;
    return newString;
  };
  var randomCapitalize = function(arrayOfStrings) {
    return arrayOfStrings.map(function(currentWord) {
      var x = Math.floor(4 * Math.random());

      return x == 3 ? currentWord.capitalize() : currentWord;
    });
  };
  var addRandomPunctuation = function(arrayOfStrings) {
    return arrayOfStrings.map(function(currentWord) {
      var randomPunctuation;
      var items = [
        ',',
        ',',
        ',',
        ',',
        ',',
        ',',
        '.',
        '.',
        '.',
        '.',
        '.',
        '?',
        '?',
        '?',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        returnLine
      ];
      var randomIndex = Math.floor(Math.random() * items.length);
      randomPunctuation = items[randomIndex];

      return currentWord + randomPunctuation;
    });
  };
  var appData = {
    indicators: {
      testStarted: false,
      testEnded: false,
      totalTestTime: 0,
      timeLeft: 0
    },
    results: {
      wpm: 0,
      wpmChange: 0,
      cpm: 0,
      cpmChange: 0,
      accurancy: 0,
      accurancyChange: 0,
      numOfCorrectWords: 0,
      numOfCorrectCharacters: 0,
      numOfTestCharaacters: 0
    },
    words: {
      currentWordIndex: 0,
      testWords: [],
      currentWords: {}
    }
  };

  var word = function(index) {};

  word.prototype.update = function(value) {};
  return {
    setTestTime: function(x) {
        appData.indicators.totalTestTime = x;
    },
    IntialTimeLeft: function() {
        appData.indicators.timeLeft = appData.indicators.totalTestTime;
    },
    StartTime: function() {},
    endTime: function() {},
    getTimeleft: function() {
        return appData.indicators.timeLeft;

    },
    reducetime: function() {},
    timeLeft: function() {},
    testEnded: function() {},
    testStarted: function() {},
    calculateWpm: function() {},
    calculateCpm: function() {},
    calculateAccurancy: function() {},

    fillListOfTestWords: function(textNumber, words) {
      var result = words.split(' ');
      if (textNumber == 0){
        result = shuffle(result);
        result = randomCapitalize(result);
        result = addRandomPunctuation(result);
      }
      appData.words.testWords = result;
    },
    getListOfTestWords: function() {
      return appData.words.testWords;
    },
    moveToNewWord: function() {},
    updateCureentWord: function(value) {},
    getReturnLine(){
        return returnLine
    },
    returnData() {
      console.log(appData);
    }
  };
})();
