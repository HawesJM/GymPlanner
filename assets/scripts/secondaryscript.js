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

// get workout plan example function

let allCardio = workout.lose_weight.cardio_workouts.concat(workout.build_muscle.cardio_workouts, workout.stretch.cardio_workouts);
console.log(allCardio);
allCardioExample = [];

for (let i = 0; i < allCardio.length; i++) {
    cardioCurrent = allCardio[i];
    allCardioExample.push(cardioCurrent);
};

console.log(allCardioExample);

// print workout plan example function excluding duplicates


let cardioExample = [];

for (let i = 0; i < allCardioExample.length; i++) {
    if (cardioExample.indexOf(allCardioExample[i]) === -1) {
        cardioExample.push(allCardioExample[i]);
    }
};

// print workout plan example function excluding pipe symbol

let cardioExampleString = cardioExample.toString();

console.log(cardioExampleString);

let cardioExampleStringFinal = cardioExampleString.split("|").join("");

console.log(cardioExampleStringFinal);

document.getElementById("cardio-example").innerHTML += cardioExampleStringFinal + ".";