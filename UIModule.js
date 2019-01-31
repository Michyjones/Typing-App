 var UIModule = (function(){

    var DOMElement ={
        timeLeft,
        wpm,
        wpmChange,
        cpm,
        cpmChange,
        accurancy,
        accurancyChange,
        textInput,
        nameInput,
        content,
        activeWord,
        modal
    };
    return{
        getDOMElement: function(){},
        updateTimeLeft: function(){},
        updateResults: function(){},
        fillModal: function(){},
        showModal: function(){},
        inputFocus: function(){},
        isNameEmpty:function(){},
        flagNameInput: function(){},
        spacePressed: function(){},
        enterPressed: function(){},
        emptyInput: function(){},
        getTypedWord: function(){},
        fillContent: function(){},
        formatWord: function(wordObject, wordHTML){},
        setActiveWord: function(index){},
        deactivateCurrentWord: function(){},
        scroll: function(){}

    }
 })();
