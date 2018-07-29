// Ugly Code
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var protein = [175, 175,	200,	200,	200,	175,	150];
var carb = [	175, 175,	0,	0,	0,	80,	125];
var fat = [50, 50,	70,	70,	70,	60,	50];
var workoutsByDay = [
  "Rest", // Sunday
  "Arms",
  "1000",
  "Legs", // Wednesday
  "Chest/Back", // Thursday
  "Rest",
  "Arms",
];
var workouts = {
  "Chest/Back":[
    { "name": "Bench Press", "sets": "4 x ?" },
    { "name": "Pull-Ups","sets": "4 x ?" },
    { "name": "Incline Press", "sets": "4 x ?" },
    { "name": "DeafLift/ or Bent Rows", "sets": "4 x ?" },
    { "name": "Fore-Arms", "sets": "4 x ?" },
    { "name": "Shrugs", "sets": "4 x ?" },
    { "name": "Optional: Side Crunches", "sets": "4 x ?" }
  ],
  "Arms":[
    { "name": "Tricep Overhead", "sets": "4 x ?" },
    { "name": "Incline Bicep Curl","sets": "4 x ?" },
    { "name": "Shoulder Side Raise", "sets": "4 x ?" },
    { "name": "Warm Up: Push-Up/ Squats", "sets": "4 x ?" },
    { "name": "Shoulder Press ", "sets": "4 x ?" }
  ],
  "1000": [
    { "name": "Squats" },
    { "name": "Hamstring Curl" },
    { "name": "Lunges" },
    { "name": "Toe Raises " }
  ],
  "Legs": [
    { "name": "Squats", "sets": "5x?" },
    { "name": "Hamstring Curl", "sets": "4x?" },
    { "name": "Lunges", "sets": "4x?" },
    { "name": "Toe Raises ", "sets":"5x?" },
    { "name": "Side Abs", "sets":"4x?" }
   ]
};




function getNutrientGoals(dayOfWeek,
  proteinList, carbList, fatList){
  // 0 is Sunday
  return {
    "protein": proteinList[dayOfWeek],
    "carb": carb[dayOfWeek],
    "fat": fat[dayOfWeek]
  }
}

var today = (new Date()).getDay();
var foodValuesObject = getNutrientGoals(today, protein, carb, fat);
var foodValues = [foodValuesObject.protein,
  foodValuesObject.carb,
  foodValuesObject.fat];
// console.log(getNutrientGoals(0, protein, carb, fat));




var workout = document.getElementById("workouts");
var calendar = document.getElementById("calendar");

var generateList = function(exerciseList, workoutName){
  var container = document.createElement("ul");
  container.innerHTML = "EXERCISES: " + workoutName;
  container.className = "container";
  exerciseList.map(
    function(exercise){
      var node = document.createElement("li");
    node.innerHTML = "" + exercise.name;
    node.className = "sexy-list";
    container.appendChild(node);
    return node;
    }
  );
  return container;
};

///// ///// ///// /////
// === CREATE EXERCISE LIST HERE ===
console.log(workoutsByDay[today]);
var workoutName = [workoutsByDay[today]];
workout.appendChild(generateList(
  workouts[workoutName], workoutName
)); // append exercises


console.log("Generating List");
console.log(workout);


//list
// Get Today's Day
// Get Today's Workout/ Data
// Display Today's Workout
// Display
