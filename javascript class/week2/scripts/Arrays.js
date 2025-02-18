//shopping list array
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping[0] = "tahini";
console.log(shopping);
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]

//random array 
const random = ["tree", 795, [0, 1, 2]];
random[2][2];


//bird array
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1

//adding items to arrays
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

//add item to array
const cities = ["Manchester", "Liverpool"];
cities.unshift("Edinburgh");
console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]

//remove array
const cities = ["Manchester", "Liverpool"];
cities.pop();
console.log(cities); // [ "Manchester" ]

//access to all items in array
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}


//string and arrays
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

//split the string
const cities = data.split(",");
cities;

//length of array
cities.length;
cities[0]; // the first item in the array
cities[1]; // the second item in the array
cities[cities.length - 1]; // the last item in the array

//other way to convert array to a string 
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); // Rocket,Flash,Bella,Slugger
