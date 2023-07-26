//your JS code here. If requ
let firstInput = prompt ("Enter string","aabbcdd");

function firstNonReapeating(firstInput) {
  for (var i = 0; i < firstInput.length; i++) {
    var output = firstInput.charAt(i);
    if (firstInput.indexOf(output) == i && firstInput.indexOf(output, i + 1) == -1) {
      return output;
    }
  }
  return null;
}


alert(firstNonReapeating(firstInput));