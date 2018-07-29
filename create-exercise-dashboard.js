

let workoutDiv = document.getElementById("workouts");
let createExerciseDashboard = function (exerciseList, workoutName) {
    let container = document.createElement("ul");
    container.innerHTML = "EXERCISES: " + workoutName;
    container.className = "container";
    exerciseList.map(
        function (exercise) {
            let node = document.createElement("li");
            node.innerHTML = "" + exercise;
            node.className = "sexy-list";
            container.appendChild(node);
            return node;
        }
    );
    return container;
};
///// ///// ///// /////
// === CREATE EXERCISE LIST HERE ===
(function parseCSVDataAndSetExercise() { //returns data // make adapter --> for case -->
        // ==== STEP 1:  GRABBING DATA (MIXED B.C ASYNC) =======
        let fullPath = "/data/Exercises.csv";

        d3.csv(fullPath, function (error, data) {
            let adaptedExerciseData = adaptListData(LIST_CONFIG, data).data;
            let workouts =  workoutsByDay[today]; // Array of Strings
            // let workoutName = [workoutsByDay[today][0]];
            console.log("DATA: YO: " + JSON.stringify(data, null, 4));
            console.log("Workouts?? " + JSON.stringify(workouts, null, 4));
            console.log("ALL WORKOUTS?" + JSON.stringify(adaptedExerciseData));
            for (let i = 0; i < workouts.length; i++){
                workoutName = workouts[i];
                console.log(workoutName + " IS NAME");
                console.log(adaptedExerciseData[workoutName] + " IS DATA ADAPTED");
                workoutDiv.appendChild(createExerciseDashboard(
                    adaptedExerciseData[workoutName]
                    , workoutName
                ));
            }
            // workouts.map((workoutName)=>{
            //     alert(workoutName);
            // console.// let dynamicList = generateListHTML(adaptedExerciseData[targetField], LIST_CONFIG);
            // document.getElementById("component-exercise").appendChild(dynamicList);
            // let workoutName = [workoutsByDay[today][0]];
        });
    }
)();

