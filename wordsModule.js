var wordsModule = (function() {
  var words = [
    'a about all also and as at be because but by can come could day do even find first for from get give go have he her here him his how I if in into it its just know like look make man many me more my new no not now of on one only or other our out people say see she so some take tell than that the their them then there these they thing think this those time to two up use very want way we well what when which who will with would year you your',
    'area book business case child company country day eye fact family government group hand home job life lot man money month mother Mr night number part people place point problem program question right room school state story student study system thing time water way week woman word work world ',
    'word1 w2 w3 w4 w5 w6',
    'word1 w2 w3 w4 w5 w6'
  ];
  return {
    getWords(textNumber) {
      return words[textNumber];
    }
  };
})();
