var UIModule = (function() {
  var splitArray = function(string) {
    return string.split('');
  };
  var addSpace = function(array) {
    array.push(' ');
    return array;
  };
  var addSpanTags = function(array) {
    return array.map(function(currentChar) {
      return '<span>' + currentChar + '</span>';
    });
  };
  var addWordSpanTags = function(array) {
    array.push('</span>');
    array.unshift('<span>');
    return array;
  };

  var joinWords = function(array) {
    return array.join('');
  };
  var userValue;
  var returnCharacterCls = function(currentChar, index) {
    return index < userValue.length
      ? currentChar == userValue[index]
        ? 'correctChar'
        : 'wrongChar'
      : '0';
  };

  var DOMElement = {
    timeLeft: document.getElementById('timeLeft'),
    wpm: document.getElementById('wpm'),
    wpmChange: document.getElementById('wpmChange'),
    cpm: document.getElementById('cpm'),
    cpmChange: document.getElementById('cpmChange'),
    accurancy: document.getElementById('acc'),
    accurancyChange: document.getElementById('accChange'),
    textInput: document.querySelector('#input'),
    nameInput: document.querySelector('.form-group'),
    content: document.getElementById('content'),
    activeWord: '',
    modal: $('#modal')
  };
  return {
    getDOMElement: function() {
      return {
        textInput: DOMElement.textInput
      };
    },
    updateTimeLeft: function(x) {
      DOMElement.timeLeft.innerHTML = x;
    },
    updateResults: function() {},
    fillModal: function() {},
    showModal: function() {},
    inputFocus: function() {
      DOMElement.textInput.focus();
    },
    isNameEmpty: function() {},
    flagNameInput: function() {},
    spacePressed: function() {},
    enterPressed: function() {},
    emptyInput: function() {},
    getTypedWord: function() {
      return DOMElement.textInput.value;
    },

    fillContent: function(array, returnLine) {
      var content = array.map(splitArray);
      content = content.map(addSpace);
      content = content.map(addSpanTags);
      content = content.map(addWordSpanTags);
      content = content.map(joinWords);
      content = content.join(' ');
      content = content
        .split('<span>' + returnLine + '</span>')
        .join('<span>&crarr;</span>');
      console.log(content);

      DOMElement.content.innerHTML = content;
    },
    formatWord: function(wordObject) {
      var activeWord = DOMElement.activeWord;
      activeWord.className = 'activeWord';
      var correctValue = wordObject.value.correct;
      userValue = wordObject.value.user;
     
      var classes = Array.prototype.map.call(correctValue, returnCharacterCls);
      var activeWord = DOMElement.activeWord;
      var characters = activeWord.children;
      for (var i = 0; i < characters.length; i++) {
        characters[i].removeAttribute('class');
        characters[i].className = classes[i];
      }
    },
    setActiveWord: function(index) {
      DOMElement.activeWord = DOMElement.content.children[index];
    },
    deactivateCurrentWord: function() {},
    scroll: function() {}
  };
})();
