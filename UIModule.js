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
  var updateChange = function(value, changeElement){
    var classToAdd, html;
    [classToAdd, html] = (value >= 0)? ['scoreUp', '+' + value]: ['scoreDown', '-' + value];
    changeElement.innerHTML = html;
    changeElement.removeAttribute('class');
    changeElement.className = classToAdd;
  };

  var DOMElement = {
    timeLeft: document.getElementById('timeLeft'),
    wpm: document.getElementById('wpm'),
    wpmChange: document.getElementById('wpmChange'),
    cpm: document.getElementById('cpm'),
    cpmChange: document.getElementById('cpmChange'),
    accuracy: document.getElementById('acc'),
    accuracyChange: document.getElementById('accChange'),
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
    updateResults: function(results) {
      DOMElement.wpm.innerHTML = results.wpm;
      DOMElement.cpm.innerHTML = results.cpm;
      DOMElement.accuracy.innerHTML = results.accuracy + '%';
      updateChange(results.wpm, DOMElement.wpmChange);
      updateChange(results.cpm, DOMElement.cpmChange);
      updateChange(results.accuracyChange, DOMElement.accuracyChange);
    },
    fillModal: function() {},
    showModal: function() {},
    inputFocus: function() {
      DOMElement.textInput.focus();
    },
    isNameEmpty: function() {},
    flagNameInput: function() {},
    spacePressed: function(event) {
      return event.data == " ";
      
    },
    enterPressed: function(returnLine) {
      return DOMElement.textInput.value.includes(returnLine + ' ');


    },
    emptyInput: function() {
      DOMElement.textInput.value = '';
    },
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
    deactivateCurrentWord: function() {
      DOMElement.activeWord.removeAttribute('class');
    },
    scroll: function() {
      var activeWord = DOMElement.activeWord;
      var top1 = DOMElement.activeWord.offsetTop;
      var top2 = DOMElement.content.offsetTop;
      var diff = top1 - top2;
      DOMElement.content.scrollTop = diff - 40;
    }
  };
})();
