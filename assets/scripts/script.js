// global variables

const form = document.getElementById("details-form");
form.addEventListener("submit", getUserDetails);

const steps = document.getElementsByClassName("step");

let userData = {};

let bmi = {};

let workout = {
    "lose_weight": {
        "workout_frequency": [3, 5],
        "cardio_workouts": [" rowing", " cycling", " light jogging", " distance running"],
        "weights_workouts": [" chin ups", " dips"],
        "rest_days": [1, 2],
        "additional": [" diet control"]
    },
    "build_muscle": {
        "workout_frequency": [3, 7],
        "rest_days": [2],
        "cardio_days": [1],
        "weights_workouts": [" bench-press", " lat pulldowns", " pectoral fly", " dumbells", " leg press"],
        "cardio_workouts": [" rowing", " treadmill walking"],
    },
    "stretch": {
        "workout_frequency": [4, 5],
        "stretches": [" lunges", " calf stretch", " hamstring stretch", " step ups", " seat stretch", " resistance band"],
        "cardio_workouts": [" light jogging",],
        "weights_workouts": [" tricep curls", " bicep curls"]
    }
};
// work in progress

let verbs = [
    "Flying", "Soaring", "Falling", "Roaring", "Flaming", "Burning", "Shining", "Stalking", "Lounging"

];

let nouns = [
    " Tiger", " Dragon", " Leopard", " Rhino", " Stork", " Lemur", " Cobra"
];

userVerb = "";

userNoun = "";

// initialise form function

$(document).ready(function () {
    $("#start-button").click(function () {
        $("#details-form").slideDown("fast");
        $("#start-button").hide();
        $("#form-container").addClass("quiz-background");
        $("#form-progress").removeClass("steps-hidden");
        steps[0].style.background = "turquoise";
    });
});

// form page 1 progress function

$("#nextBtn1").click(function () {
    $("#personal-info").slideUp("fast");
    $("#workoutinfo").removeClass("workout-info-next");
    steps[1].style.background = "turquoise";
});

// form page 2 progress function

$(".workout-type-form").click(function () {
    $("#nextBtn2").removeClass("hiddenbutton");
});

$("#nextBtn2").click(function () {
    $("#workoutinfo").slideUp("fast");
    $("#membership-status").addClass("membership-status-show");
    steps[2].style.background = "turquoise";
});

// form page 3 progress function

$("#membership-status").click(function () {
    $("#nextBtn3").removeClass("hiddenbutton");
});

$("#nextBtn3").click(function () {
    $("#membership-status").slideUp("fast");
    $("#stats").removeClass("stats-hidden");
    steps[3].style.background = "turquoise";
});

// form page 4 progress function

$("#nextBtn4").click(function () {
    $("#stats").slideUp("fast");
    $("#times").removeClass("times-hidden");
    steps[4].style.background = "turquoise";
});

// form page 5 progress function

$("#times").click(function () {
    $("#form-submit-button").removeClass("hiddenbutton");
});

// form refresh function

$("#refresh-button").click(function () {
    window.location.reload();
});

// function to display active form steps

// get user data function

function getUserDetails(event) {
    event.preventDefault();
    console.log(userData);
    userData["name"] = document.getElementById("inputName").value;
    userData["email"] = document.getElementById("inputEmail").value;
    userData["workout_goal"] = document.querySelector('input[name="workout-type"]:checked').value;
    userData["gym_access"] = document.querySelector('input[name="gymaccess"]:checked').value;
    userData["height"] = document.getElementById("inputHeight").value;
    userData["weight"] = document.getElementById("inputWeight").value;
    userData["workout_length"] = document.querySelector('input[name="gymtime"]:checked').value;
    bmi = (userData.weight / (userData.height * userData.height) * 10000);
    console.log(bmi);

};

// hide submitted form function

$("#form-submit").click(function () {
    hideDetailsForm();

    function hideDetailsForm() {
        $("#times").slideUp("fast");
        $("#form-submit").slideUp("fast");
        $("#refresh-button").slideUp("fast");
        $("#form-progress").slideUp("fast");
        $("#form-container").slideUp("fast");
    }
});

// show workout plan function container
$("#form-submit").click(function () {
    setTimeout(function () {
        $("#results-container").removeClass("results-hidden");
        document.getElementById("name_heading").innerHTML += userData.name;
        document.getElementById("goals_heading").innerHTML += userData.workout_goal;
        if (userData.workout_goal == "Endurance & Fitness") {
            enduranceAndFitness();
        }
        else if (userData.workout_goal == "Strength & Sculpture") {
            strengthAndSculpture();
        }
        else {
            balanceAndFlexibility();
        }
        generate();
    }, 100);
});

// different workout plan functions

function enduranceAndFitness() {
    if (bmi > 25) {
        document.getElementById("workout_frequency").innerHTML += workout.lose_weight.workout_frequency[0] + " times a week";
        let [cardio1, cardio2, cardio3] = workout.lose_weight.cardio_workouts;
        console.log(cardio1, cardio2, cardio3);
        document.getElementById("cardio_exercises").innerHTML += cardio1 + cardio2 + cardio3;
        document.getElementById("additional").innerHTML += workout.lose_weight.additional;
    }
    else {
        console.log(bmi);
        let upTo = " up to " + workout.lose_weight.workout_frequency[1] + " times a week";
        console.log(upTo);
        document.getElementById("workout_frequency").innerHTML += upTo;
        document.getElementById("cardio_exercises").innerHTML = workout.lose_weight.cardio_workouts;
        document.getElementById("weights_exercises").innerHTML = workout.lose_weight.weights_workouts;
    }
}

function strengthAndSculpture() {
    if (bmi > 25) {
        document.getElementById("workout_frequency").innerHTML += workout.build_muscle.workout_frequency[0] + " times a week";
        document.getElementById("weights_exercises").innerHTML += workout.build_muscle.weights_workouts;
        console.log(workout.build_muscle.weights_workouts);
        let [buildCardio1] = workout.build_muscle.cardio_workouts;
        document.getElementById("cardio_exercises").innerHTML += buildCardio1;
    }
    else {
        console.log(bmi);
        let upTo = " up to " + workout.build_muscle.workout_frequency[1] + " times a week";
        console.log(upTo);
        document.getElementById("workout_frequency").innerHTML += upTo;
        let [buildCardio1, buildCardio2] = workout.build_muscle.cardio_workouts;
        document.getElementById("cardio_exercises").innerHTML += buildCardio1 + " ," + buildCardio2;
    }
}

function balanceAndFlexibility() {
    console.log("balance");
    if (bmi > 25) {
        document.getElementById("workout_frequency").innerHTML += workout.stretch.workout_frequency[0] + " times a week";
        let [stretches1, stretches2, stretches3, stretches4] = workout.stretch.stretches;
        document.getElementById("stretches").innerHTML += stretches1 + stretches2 + stretches3 + stretches4;
    }
    else {
        console.log(bmi);
        document.getElementById("workout_frequency").innerHTML += workout.stretch.workout_frequency[1] + " times a week";
        document.getElementById("weights_exercises").innerHTML += workout.stretch.weights_workouts;
        document.getElementById("stretches").innerHTML += workout.stretch.stretches;
        document.getElementById("cardio_exercises").innerHTML += workout.stretch.cardio_workouts;
    }
}

function generate() {
    userVerb = verbs[
        Math.floor(Math.random() * verbs.length)];
    console.log(userVerb);
    userNoun = nouns[
        Math.floor(Math.random() * nouns.length)];
    console.log(userNoun);
    let planNick = userVerb + userNoun;
    document.getElementById("plan_heading").innerHTML += planNick;
}


