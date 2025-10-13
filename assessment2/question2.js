"use strict";
const isLower = function (str) {
  const a = str.replace(/[^\w\s_]/g, "").toLowerCase();
  //console.log(a);
  const sep = a.split(" ");
  //console.log(sep);
  const obj = {};
  for (let i = 0; i < sep.length; i++) {
    if (obj[sep[i]]) {
      obj[sep[i]]++;
    } else {
      obj[sep[i]] = 1;
    }
  }
  //   console.log(obj);
  for (let word in obj) {
    console.log(`${word}=>${obj[word]}`);
  }
};
isLower("Hello, How Are You? hello you");
isLower("Add milk and eggs, then add flour and sugar.");
isLower("After beating the eggs, Dana read the next step");
