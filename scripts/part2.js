// 1.
var people = {
  Chuck: 22,
  Brian: 46,
  Ryan: 100
}

function oldestPerson(someOb) {
  var oldest = "";
  var age = 0;
  for (var name in someOb) {
    if (someOb[name] > age) {
      age = someOb[name];
      oldest = name;
    }
  }
  return oldest;
}

//2.
var random = "I think Mississippi covers it.";

function longestWord(aString) {
  var longArray = aString.replace(/[^a-zA-Z0-9']/g, " ").split(" ");
  var longest = "";
  for (var i = 0; i <longArray.length; i++) {
    if (longArray[i].length > longest.length) {
      longest = longArray[i];
    }
  }
  return longest;
}

//3. oops, did it in one shot without knowing this problem.

//4.
function factorial(num) {
  var total = 1;
  for (var i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

//5.
var drome = "race car";
var notDrome = "whatever you Like"

function paliTest(string) {
  var aString = string.toLowerCase();
  if (aString.replace(/\s/,"") === aString.replace(/\s/,"").split("").reverse().join("")) {
    return "Dats a drome";
  } else {
    return "Nope, no drome here";
  }
}
