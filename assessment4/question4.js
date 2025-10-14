var hobbies = {
  Steve: ["Fashion", "Piano", "Reading"],
  Patty: ["Drama", "Magic", "Pets"],
  Chad: ["Puzzles", "Pets", "Yoga"],
};
const findAllHobbyists = function (hobby, hobbies) {
  const person = [];
  for (let name in hobbies) {
    if (hobbies[name].includes(hobby)) {
      person.push(name);
    } 
  }
  if(person.length===0){
    return ("No matching hobby or person is found");
  }
  return person;
};
a = findAllHobbyists("Yoga", hobbies);
b = findAllHobbyists("Pets", hobbies);
c = findAllHobbyists("cricket", hobbies);
console.log(a);
console.log(b);
console.log(c);
