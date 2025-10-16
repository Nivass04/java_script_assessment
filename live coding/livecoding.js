const users = [
  { name: "Steve", age: 18, zipcode: 35004 },
  { name: "John", age: 34, zipcode: 99501 },
  { name: "Jack", age: 19, zipcode: 99535 },
  { name: "Jonas", age: 26, zipcode: 85001 },
  { name: "Smith", age: 39, zipcode: 71601 },
  { name: "Casey", age: 26, zipcode: 32003 },
  { name: "Robert", age: 17, zipcode: 96701 },
  { name: "Daniel", age: 21, zipcode: 83201 },
  { name: "Joseph", age: 42, zipcode: 70001 },
  { name: "Jessica", age: 31, zipcode: 59001 },
  { name: "Tom", age: 32, zipcode: 37010 },
  { name: "Trevor", age: 24, zipcode: 24701 },
  { name: "Mark", age: 54, zipcode: 96910 },
  { name: "Jamie", age: 39, zipcode: 84001 },
  { name: "Alex", age: 15, zipcode: 88595 },
];

const valid = function () {
  const name = document.querySelector(".zip").value;
  let result = document.querySelector(".result");
  // result.textContent("")
  for (let n in users) {
    if (n.name === name && n.age > 18 && n.zipcode != 92493) {
      result.textContent = "User found ";
    } else if (n.name === name && n.age > 18 && n.zipcode === 92493) {
      result.textContent = "User found but invalid zip code";
    } else if (n.name === name && n.age < 18) {
      result.textContent = "user found but under age limit";
    } else {
      result.textContent = "user not found";
    }
  }
};

document.querySelector(".display").addEventListener("click", valid);
