var openBrackets = ['(', '{', '['];
var closedBrackets = {'(': ')', '{': '}', '[': ']'};

//takes a string as param and returns true if brackets are balanced
function validate(str) {
    var openBracketIndexes = [];
    var isValid = true;
    var result = str;
    
    // map all opening brackets to its index
    for (var i=0; i<str.length; i++) {
        if (openBrackets.indexOf(str[i]) != -1) {
            var obj = {val: str[i], index: i};
            openBracketIndexes.push(obj);
        }
    }
    
    openBracketIndexes.reverse();
       
    // search for closing brackets
    for (var j=0; j<openBracketIndexes.length; j++) {
        var start = openBracketIndexes[j].index;
        var value = openBracketIndexes[j].val;

        for (var k=start+1; k<=result.length; k++) {
            if (result[k] == closedBrackets[value]) {
               result = result.substring(0, start) + result.substring(k+1, result.length);
               break;
            }
        }
    }

    // if any remaining closing brackets return false
    if (result.length > 0) {
        isValid = false;
    }
    
    return isValid;
}
