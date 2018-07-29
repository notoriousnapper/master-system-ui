d3.csv("/data/NutritionNumbers.csv", function (error, data) {
    console.log("Nutrition Data: " + JSON.stringify(data, null, 4));
});
let nutritionFile = "NutritionNumbers";
let exerciseFile = "Exercises";
let negotiableFile = "Non-Negotiables";
let TEST_FIELD_EXERCISE = 'Chest/Back';
let TEST_FIELD_NN = 'Items';

function parseCSVData(fileName, targetField) { //returns data // make adapter --> for case -->
    // ==== STEP 1:  GRABBING DATA (MIXED B.C ASYNC) =======
    let fullPath = "/data/" + fileName + ".csv";
    d3.csv(fullPath, function (error, data) {
        console.log(data);

        // ==== STEP 2:   TRANSFORM DATA TO ADAPT ======= TODO: Make this an input
        let adaptedExerciseData = {};
        if (fileName === exerciseFile) {
            adaptedExerciseData = adaptListData(LIST_CONFIG, data).data;
            // console.log("DATA ADAPTED: " + JSON.stringify(adaptedExerciseData)); // WORKED!
        }

        else if (fileName === negotiableFile) {
            adaptedExerciseData = adaptListData(LIST_CONFIG, data).data;
            // console.log("DATA ADAPTED: " + JSON.stringify(adaptedExerciseData)); // WORKED!
        }

        let dynamicList = generateListHTML(adaptedExerciseData[targetField], LIST_CONFIG);
        document.getElementById("component-exercise").appendChild(dynamicList);
    });
}


// TODO: Uncomment this BELOW
// let exercisesList = parseCSVData(exerciseFile, TEST_FIELD_EXERCISE);
let negotiablesList = parseCSVData(negotiableFile, TEST_FIELD_NN);

// options
// TODO: Also - merge data for views too
// TODO: LAST LEFT OFF --> Adapating data with an adapter for exercises
// Get Fields first for easy access
// ex data: exercises.csv





// Set schema for ---> data, etc let's GO (strict type checking)
// TODO: unclean data load - Quick and dirty Load
// Should be this easy
// TODO: Data should be array of arrays, super simple [ [1,2,3], [1,2,3]...], 1 is mani data 2, is whatever, 3 is set number..






