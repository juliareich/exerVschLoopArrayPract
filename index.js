// number 1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var counts = {};

for(var i = 0; i < officeItems.length; i++){
    var items = officeItems[i];
    counts[items] = counts[items] ? counts[items] + 1 : 1;
    
}
console.log(counts["computer"])

// number 2
var peopleWhoWantToSeeMadMaxFuryRoad = [{name: "Mike", age: 12, gender: "male"}, 
        {
      name: "Madeline",
      age: 80,
      gender: "female"
    }, {
      name: "Cheryl",
      age: 22,
      gender: "female"
    }, {
      name: "Sam",
      age: 30,
      gender: "male"
    }, {
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ];

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road. Don't let her see it.")  
    } if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road. Don't let him see it.")
    } if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road. He may see it.")
    } if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road. She may see it.")
    }

}







