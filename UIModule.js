var UIModule = (function() {
  var splitArray = function(string) {
    return string.split('');
  };
  var addSpace = function(array) {
    array.push('');
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
    getDOMElement: function() {},
    updateTimeLeft: function(x) {
      DOMElement.timeLeft.innerHTML = x;
    },
    updateResults: function() {},
    fillModal: function() {},
    showModal: function() {},
    inputFocus: function() {},
    isNameEmpty: function() {},
    flagNameInput: function() {},
    spacePressed: function() {},
    enterPressed: function() {},
    emptyInput: function() {},
    getTypedWord: function() {},

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
    formatWord: function(wordObject, wordHTML) {},
    setActiveWord: function(index) {},
    deactivateCurrentWord: function() {},
    scroll: function() {}
  };
})();
