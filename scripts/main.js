function sum(num1, num2) {
  return num1 + num 2;
}
var resultSum = sum(1, 2);


function isEqual(arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  } else {
    return false;
  }
}


function discountPercentage(cost, discount) {
  if (discount > 0 && discount < 100) {
    return cost * (discount / 100);
  } else {
    return "You are dumb";
  }
}


function stringCapitalize(somestring) {
  somestring = somestring.toLowerCase();
  var newstring = somestring[0].toUpperCase();
  for (var i = 1; i < somestring.length; i++) {
    if (somestring[i] === " ") {
      newstring += somestring[i] + somestring[i+1].toUpperCase();
      i++;
    } else {
      newstring += somestring[i];
    }
  }
  return newstring;
}


function evenNumbers(int) {
  int = parseInt(int);
  if (int > 0 && int < 100) {
    for (var i = 0; i < int; i+=2) {
      console.log(i);
    }
  } else {
    console.log("A number BETWEEN 0 and 100, please.");
  }
}


function isDivisible(int1, int2) {
  if (int1 % int2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}


function oddNumbers(int) {
  int = parseInt(int);
  if (int >= 0 && int <= 100) {
    if (int > 40) {
      for (var i = 40; i <= int; i++) {
        if (i % 2 !== 0) {
          console.log(i);
        }
      }
    } else {
      for (var i = 0; i <= int; i++) {
        if (i % 2 !== 0) {
          console.log(i);
        }
      }
    }
  } else {
    console.log("A number BETWEEN 0 and 100, please.");
  }
}
