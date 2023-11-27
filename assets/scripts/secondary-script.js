// initial global variables

let workout = {
    "lose_weight": {
        "workout_frequency": [3, 5],
        "cardio_workouts": [" Rowing | ", " Cycling | ", " Light Jogging | ", " Distance Running | "],
        "weights_workouts": [" Chin-ups | ", " Dips | "],
        "rest_days": [1, 2],
        "additional": [" Diet Control"]
    },
    "build_muscle": {
        "workout_frequency": [3, 7],
        "rest_days": [2],
        "cardio_days": [1],
        "weights_workouts": [" Bench Press | ", " Lat Pulldowns | ", " Pectoral Fly | ", " Dumbells | ", " Leg Press | "],
        "cardio_workouts": [" Rowing | ", " Treadmill Walking | "],
        "additional": [" Diet Control"],
    },
    "stretch": {
        "workout_frequency": [4, 5],
        "stretches": [" Lunges | ", " Calf Stretch | ", " Hamstring Stretch | ", " Step Ups | ", " Seat Stretch | ", " Resistance Band | "],
        "cardio_workouts": [" Light Jogging",],
        "poses": [" Child's Pose | ", " Standing Forward Bend | ", "Extended Side Angle | "]
    }
};

// event listeners

document.getElementById("cardio-example-span").addEventListener("click", showCardioExample);

// get workout plan example function

let allCardio = workout.lose_weight.cardio_workouts.concat(workout.build_muscle.cardio_workouts, workout.stretch.cardio_workouts);
allCardioExample = [];

for (let i = 0; i < allCardio.length; i++) {
    cardioCurrent = allCardio[i];
    allCardioExample.push(cardioCurrent);
}

// print workout plan example function excluding duplicates

let cardioExample = [];

for (let i = 0; i < allCardioExample.length; i++) {
    if (cardioExample.indexOf(allCardioExample[i]) === -1) {
        cardioExample.push(allCardioExample[i]);
    }
}

// print workout plan example function excluding pipe symbol

let cardioExampleString = cardioExample.toString();

let cardioExampleStringFinal = cardioExampleString.split("|").join("");

function showCardioExample() {
    document.getElementById("about-cardio-example").innerHTML += "<hr>" + "Cardio Examples:" + "<br>" + cardioExampleStringFinal + ".";
    document.getElementById("about-cardio-example").classList.remove("about-cardio-hidden");
    document.getElementById("cardio-example-span").classList.add("about-cardio-hidden");
}