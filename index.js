// javaScript Arrays

const friends = ["salma", "ruweyda", "ikraam"];
console.log(friends);

friends [2] = "maria";
console.log(friends);

console.log(friends.length);

console.log(friends[friends.length - 1]);

// javascript array works with different datatypes

const asma =["asma", "madino", 2023 - 1999, "dactor", friends];

console.log(asma);

const ages = function (birthyear){
    return 2024 - birthyear;
}

const year = [1990, 1978, 1999, 1898];
const age = ages(year[0]);

console.log(age);

//array operations

const names = ["sacdiya", "sihaam", "sumayo"];
names.push("leyla");
console.log(names);

names.unshift("abdi");
console.log(names);

//remove element

names.pop();
console.log(names);

const popped = names.pop();
console.log(popped);
console.log(names);

//remove first element

names.shift();
console.log(names);

console.log(names.indexOf(sihaam));

console.log(names.includes(salma));
console.log(names.includes(asmaa));

if(names.includes(shamsa)){
    console.log("you got the prettiest girl");
}