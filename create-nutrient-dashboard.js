// BIG WARNING -> GENERATE-LIST
// GENERATES A VARIABLE "foodVALUES"
// That this script uses!""
// ************************
var date = new Date();
let daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
document.getElementById("calendar").innerHTML = daysOfWeek[date.getDay()];
var ctx = document.getElementById("myChart");

let protein = [175, 175, 200, 200, 200, 175, 150];
let carb = [175, 175, 0, 0, 0, 80, 125];
let fat = [50, 50, 70, 70, 70, 60, 50];

function getNutrientGoals(dayOfWeek,
                          proteinList, carbList, fatList) {
    return {
        "protein": proteinList[dayOfWeek],
        "carb": carb[dayOfWeek],
        "fat": fat[dayOfWeek]
    }
}

let today = (new Date()).getDay() + 1;
let foodValuesObject = getNutrientGoals(today, protein, carb, fat);
let foodValues = [foodValuesObject.protein,
    foodValuesObject.carb,
    foodValuesObject.fat];
// ctx.canvas.width = 300;
// ctx.canvas.height = 300;
var datasets = [{
    label: '# of Votes',
    data: foodValues,
    // [12, 19, 3],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
    ],
    borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
    ],
    borderWidth: 1
}];
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            "Protein" + "(" + foodValues[0] + ")",
            "Carb" + "(" + foodValues[1] + ")",
            "Fat" + "(" + foodValues[2] + ")"
        ],
        datasets: datasets
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 40
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 40
                }
            }]
        }
    }
});