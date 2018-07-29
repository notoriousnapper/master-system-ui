console.log("Testing");
let nutritionFile = "NutritionNumbers";
let exerciseFile = "Exercises";

function parseCSVData(fileName) { //returns data
    let fullPath = "/data/" + fileName + ".csv";
    d3.csv(fullPath, function (error, data) {
        console.log(data);
        console.log("Anything?");
        //TODO: Make this an input
        // console.log("DATA ADAPTED: " +  JSON.stringify(adaptListData("", data))); // WORKED!
        let adaptedExerciseData = adaptListData(LIST_CONFIG, data).data;
        console.log("DATA ADAPTED: " +  JSON.stringify(adaptedExerciseData)); // WORKED!

        const TEST_FIELD = 'Chest';
        // breakpoint
        console.log("CONFIG" + JSON.stringify(LIST_CONFIG, null, 4));

        let dynamicList = generateListHTML(adaptedExerciseData[TEST_FIELD], LIST_CONFIG);
        document.getElementById("component-exercise").appendChild(dynamicList);
        console.log("Should have appended STH: " + dynamicList);
    });
}

parseCSVData(nutritionFile);
// Trying to adapt data
let exercisesList = parseCSVData(exerciseFile);

// options
// TODO: Also - merge data for views too
// TODO: LAST LEFT OFF --> Adapating data with an adapter for exercises
// Get Fields first for easy access
// ex data: exercises.csv


function adaptListData(option, data) {
    let fields = [];
    let adaptedData = {};
    let firstSet = data[0];

    // Gather fields
    for (var key in firstSet) {
        fields.push(key);
        console.log("key: " + key);
    }


    // Create Template
    fields.map((field) => {
        /* let dataObject = {} */
        ;
        adaptedData[field] = [];
    });
    console.log("whole data: " + JSON.stringify(adaptedData, null, 4));
    console.log("whole fields: " + fields);

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < fields.length; j++) {
            let targetData = data[i][fields[j]];
            let targetGroup = adaptedData[fields[j]]
            targetGroup.push(
                [targetData] // TODO: Format must be like this --> look at generateListNodeHTML
            );
        }
    }
    return {
        data: adaptedData,
        fields: fields
    };
}


// Set schema for ---> data, etc let's GO (strict type checking)
// TODO: unclean data load - Quick and dirty Load
// Should be this easy
// TODO: Data should be array of arrays, super simple [ [1,2,3], [1,2,3]...], 1 is mani data 2, is whatever, 3 is set number..





