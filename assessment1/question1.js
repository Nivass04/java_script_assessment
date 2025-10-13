"use strict";
// valid->(),[],{}
// invalid-> [(]),{[},......
const isNested = function (str) {
  let openers = [];
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
      openers.push(arr[i]);
    } else if (arr[i] === ")" || arr[i] === "}" || arr[i] === "]") {
      if (openers.length === 0) {
        console.log("Format is invalid");
        return;
      }
      let opp = openers[openers.length - 1];
      if (
        (opp === "(" && arr[i] === ")") ||
        (opp === "{" && arr[i] === "}") ||
        (opp === "[" && arr[i] === "]")
      ) {
        openers.pop();
      } else {
        console.log("format is invalid");
        return;
      }
    }
  }
  if (openers.length === 0) {
    console.log("format is valid");
  } else {
    console.log("format is invalid");
  }
};
isNested("Hello(nivass)[student]");
isNested("[(])");
isNested("{[()]}");
