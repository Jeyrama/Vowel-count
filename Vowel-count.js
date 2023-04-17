/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this challenge, (but not y).

The input string will only consist of lower case letters and/or spaces.
*/


// Solution

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

// or

function getCount(str) {
  let vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    for(let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels [j]) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}

// or 

function getCount(str) {
  return str.split('').filter(c => "aeiou".includes(c)).length;
}

// or

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

// or

function getCount(str) {
  let vowelsCount = 0;
  for (index in str) {
    switch (str[index]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      vowelsCount++;
      break;
    }
  }
  return vowelsCount;
}