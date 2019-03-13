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
  var correctcharacters;
  var callBack = function(currentElement, index) {
    correctcharacters += currentElement == this.characters.user[index] ? 1 : 0;
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
      accuracy: 0,
      accuracyChange: 0,
      numOfCorrectWords: 0,
      numOfCorrectCharacters: 0,
      numOfTestCharaacters: 0
    },
    words: {
      currentWordIndex: -1,
      testWords: [],
      currentWords: {}
    }
  };

  var word = function(index) {
    this.value = {
      correct: appData.words.testWords[index] + ' ',
      user: '',
      isCorrect: false
    };
    this.characters = {
      correct: this.value.correct.split(''),
      user: [],
      totalCorrect: 0,
      totalTest: this.value.correct.length
    };
  };

  word.prototype.update = function(value) {
    this.value.user = value;
    this.value.isCorrect = this.value.correct == this.value.user;
    this.characters.user = this.value.user.split('');
    correctcharacters = 0;

    callBack = callBack.bind(this);
    this.characters.correct.forEach(callBack);
    this.characters.totalCorrect = correctcharacters;
  };
  return {
    setTestTime: function(x) {
      appData.indicators.totalTestTime = x;
    },
    IntialTimeLeft: function() {
      appData.indicators.timeLeft = appData.indicators.totalTestTime;
    },
    StartTest: function() {
      appData.indicators.testStarted = true;
    },
    endTime: function() {},
    getTimeleft: function() {
      return appData.indicators.timeLeft;
    },
    reduceTime: function() {
      appData.indicators.timeLeft --;
      return appData.indicators.timeLeft;
    },
    timeLeft: function() {
      return appData.indicators.timeLeft != 0;
    },
    testEnded: function() {
      return appData.indicators.testEnded;
    },
    testStarted: function() {
      return appData.indicators.testStarted;
    },
    calculateWpm: function() {
      var wpmOld = appData.results.wpm;
      var numOfCorrectWords = appData.results.numOfCorrectWords;
      if (appData.indicators.timeLeft != appData.indicators.totalTestTime) {
        appData.results.wpm = Math.round(60 * numOfCorrectWords/
            (appData.indicators.totalTestTime - appData.indicators.timeLeft)
        );
      } else {
        appData.results.wpm = 0;
      }
      appData.results.wpmChange = appData.results.wpm - wpmOld;
      return [appData.results.wpm, appData.results.wpmChange];
    },
    calculateCpm: function() {
      var cpmOld = appData.results.cpm;
      var numOfCorrectCharacters = appData.results.numOfCorrectCharacters;
      if (appData.indicators.timeLeft != appData.indicators.totalTestTime) {
        appData.results.cpm = Math.round(60 * numOfCorrectCharacters/
            (appData.indicators.totalTestTime - appData.indicators.timeLeft)
        );
      } else {
        appData.results.cpm = 0;
      }
      appData.results.cpmChange = appData.results.cpm - cpmOld;
      return [appData.results.cpm, appData.results.cpmChange];
    },
    calculateAccuracy: function() {
      var accuracyOld = appData.results.accuracy;
      var numOfCorrectCharacters = appData.results.numOfCorrectCharacters;
      var numOfTestCharaacters = appData.results.numOfTestCharaacters;
      if (appData.indicators.timeLeft != appData.indicators.totalTestTime) {
        if (numOfTestCharaacters != 0) {
          appData.results.accuracy = Math.round(100 * (numOfCorrectCharacters/numOfTestCharaacters));
        } else {
          appData.results.accuracy = 0
        }
      } else {
        appData.results.accuracy = 0 
      }
      appData.results.accuracyChange = appData.results.accuracy - accuracyOld;
      return [appData.results.accuracy, appData.results.accuracyChange];
    },
    fillListOfTestWords: function(textNumber, words) {
      var result = words.split(' ');
      if (textNumber == 0) {
        result = shuffle(result);
        result = randomCapitalize(result);
        result = addRandomPunctuation(result);
      }
      appData.words.testWords = result;
    },
    getListOfTestWords: function() {
      return appData.words.testWords;
    },
    moveToNewWord: function() {
      if (appData.words.currentWordIndex > -1) {
        if (appData.words.currentWords.value.isCorrect == true) {
          appData.results.numOfCorrectWords++;
        }
        appData.results.numOfCorrectCharacters +=
          appData.words.currentWords.characters.totalCorrect;
        appData.results.numOfTestCharaacters +=
          appData.words.currentWords.characters.totalTest;
      }
      appData.words.currentWordIndex ++;
      var currentIndex = appData.words.currentWordIndex;
      var newWord = new word(currentIndex);
      appData.words.currentWords = newWord;
    },
    updateCureentWord: function(value) {
      appData.words.currentWords.update(value);
    },
    getReturnLine() {
      return returnLine;
    },
    getCurrentWordIndex() {
      return appData.words.currentWordIndex;
    },
    getCurrentWord() {
      var currentWord = appData.words.currentWords;
      return {
        value: {
          correct: currentWord.value.correct,
          user: currentWord.value.user
        }
      };
    },
    returnData() {
      console.log(appData);
    }
  };
})();
