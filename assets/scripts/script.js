// initial global variables and event listeners

const form = document.getElementById("details-form");
form.addEventListener("submit", getUserDetails);

document.getElementById("userDetails").addEventListener("click", validateUserInfo);
document.getElementById("userBmi").addEventListener("click", validateBmi);
document.getElementById("form-submit").addEventListener("click", dateTime);

const steps = document.getElementsByClassName("step");

let userData = {};

let bmi = {};

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

let verbs = [
    "Flying", "Soaring", "Roaring", "Flaming", "Glimmering", "Shining", "Stalking", "Striking", "Shimmering", "Leaping"

];

let nouns = [
    " Tiger", " Dragon", " Leopard", " Rhino", " Eagle", " Wolf", " Cobra", " Gazelle"
];

let thirtySixtyPlan = {
    "thirtySixtyPlanATimings": "per workout session; perform one or two of your preferred primary exercise types with either a five minute cooldown or a ten minute break in between",
    "thirtySixtyPlanBTimings": "per workout session; perform one of your preferred primary exercise types with a complete set one of your preferred secondary workout types"
};

let sixtyNinetyPlan = {
    "sixtyNinetyPlanATimings": "per workout session; perform 2-3 of your preferred primary exercise types all with a five minute cooldown and a ten minute break in between",
    "sixtyNinetyPlanBTimings": "per workout session; perform 2 of your preferred primary exercise types with two complete sets of secondary workouts"
};

let ninetyOneTwentyPlan = {
    "ninetyOneTwentyPlanATimings": "per workout session; perform 3 of your preferred primary exercise types with a ten minute break in between each, 10 minute cooldowns, and leave scope for repeats",
    "ninetyOneTwentyPlanBTimings": "per workout session; perform 3 of your preferred primary exercise types, with a five minute break in between each, finish with two complete sets of secondary workout types, leaving scope for repeats"
};

let workoutSpecifics = "";

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const card = document.getElementById("card");
card.addEventListener("click", flipCard);

// stop form being submitted on enter keypress

$(document).on("keydown", "form", function (event) {
    return event.key != "Enter";
});

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

$(".workout-type-form").change(function () {
    $("#nextBtn2").removeClass("hiddenbutton");
});

$("#nextBtn2").click(function () {
    $("#workoutinfo").slideUp("fast");
    $("#membership-status").addClass("membership-status-show");
    steps[2].style.background = "turquoise";
});

// form page 3 progress function

$("#membership-status").change(function () {
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

$("#times").change(function () {
    $("#form-submit-button").removeClass("hiddenbutton");
});

// form refresh function

$("#refresh-button").click(function () {
    window.location.reload();
});

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
    console.log(userData.workout_length);

    // to build specific workout plan based on selections and input

    if (document.getElementById("gym30").checked === true && bmi > 25) {
        workoutSpecifics = thirtySixtyPlan.thirtySixtyPlanATimings;
        console.log("plan30");
    }
    else if
        (document.getElementById("gym60").checked === true && bmi > 25) {
        workoutSpecifics = sixtyNinetyPlan.sixtyNinetyPlanATimings;
        console.log("plan60hallelujah");
    }
    else if
        (document.getElementById("gym90").checked === true && bmi > 25) {
        workoutSpecifics = ninetyOneTwentyPlan.ninetyOneTwentyPlanATimings;
        console.log("plan90");
    }
    else if
        (document.getElementById("gym30").checked === true && bmi < 25) {
        workoutSpecifics = thirtySixtyPlan.thirtySixtyPlanBTimings;
        console.log("specialsausage");
    }
    else if
        (document.getElementById("gym60").checked === true && bmi < 25) {
        workoutSpecifics = sixtyNinetyPlan.sixtyNinetyPlanBTimings;
        console.log("specialsausages");
    }
    else if
        (document.getElementById("gym90").checked === true && bmi < 25) {
        workoutSpecifics = ninetyOneTwentyPlan.ninetyOneTwentyPlanBTimings;
        console.log("specialsausagesausage");
    }
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
        resources();
    }, 100);
});

// different workout plan functions

function enduranceAndFitness() {
    if (bmi > 25) {
        document.getElementById("workout_frequency").innerHTML += workout.lose_weight.workout_frequency[0] + " times a week";
        let [cardio1, cardio2, cardio3] = workout.lose_weight.cardio_workouts;
        console.log(cardio1, cardio2, cardio3);
        document.getElementById("primary_type").innerHTML = "Cardio";
        document.getElementById("secondary_type").innerHTML = "None";
        document.getElementById("cardio_exercises").innerHTML += cardio1 + cardio2 + cardio3;
        document.getElementById("additional").innerHTML += workout.lose_weight.additional;
        document.getElementById("plan_number").innerHTML = Math.floor(Math.random() * 1000);
        document.getElementById("plan_specifics").innerHTML += workoutSpecifics;

    } else {
        console.log(bmi);
        let upTo = " up to " + workout.lose_weight.workout_frequency[1] + " times a week";
        console.log(upTo);
        let [weights1, weights2] = workout.lose_weight.weights_workouts;
        let [cardio1, cardio2, cardio3, cardio4] = workout.lose_weight.cardio_workouts;
        document.getElementById("workout_frequency").innerHTML += upTo;
        document.getElementById("primary_type").innerHTML = "Cardio";
        document.getElementById("secondary_type").innerHTML = "Resistance";
        document.getElementById("cardio_exercises").innerHTML += cardio1 + cardio2 + cardio3 + cardio4;
        document.getElementById("weights_exercises").innerHTML += weights1 + weights2;
        document.getElementById("additional").innerHTML = "None";
        document.getElementById("plan_number").innerHTML = Math.floor(Math.random() * 1000);
        document.getElementById("plan_specifics").innerHTML += workoutSpecifics;
    }
}

function strengthAndSculpture() {
    if (bmi > 25) {
        document.getElementById("workout_frequency").innerHTML += workout.build_muscle.workout_frequency[0] + " times a week";
        let [weights1, weights2, weights3] = workout.build_muscle.weights_workouts;
        document.getElementById("weights_exercises").innerHTML += weights1 + weights2 + weights3;
        console.log(workout.build_muscle.weights_workouts);
        let [buildCardio1] = workout.build_muscle.cardio_workouts;
        document.getElementById("primary_type").innerHTML = "Weights";
        document.getElementById("secondary_type").innerHTML = "Rowing Cooldown";
        document.getElementById("plan_number").innerHTML = Math.floor(Math.random() * 1000);
        document.getElementById("cardio_exercises").innerHTML += buildCardio1;
        document.getElementById("additional").innerHTML += workout.build_muscle.additional;
        document.getElementById("plan_specifics").innerHTML += workoutSpecifics;
    }
    else {
        console.log(bmi);
        let upTo = " up to " + workout.build_muscle.workout_frequency[1] + " times a week";
        document.getElementById("plan_number").innerHTML = Math.floor(Math.random() * 1000);
        console.log(upTo);
        document.getElementById("workout_frequency").innerHTML += upTo;
        document.getElementById("primary_type").innerHTML = "Weights";
        document.getElementById("secondary_type").innerHTML = "Light Cardio/Resistance";
        let [buildCardio1, buildCardio2] = workout.build_muscle.cardio_workouts;
        let [buildWeights1, buildWeights2, buildWeights3, buildWeights4, buildWeights5] = workout.build_muscle.weights_workouts;
        document.getElementById("cardio_exercises").innerHTML += buildCardio1 + buildCardio2;
        document.getElementById("weights_exercises").innerHTML += buildWeights1 + buildWeights2 + buildWeights3 + buildWeights4 + buildWeights5;
        document.getElementById("plan_specifics").innerHTML += workoutSpecifics;
    }
}

function balanceAndFlexibility() {
    console.log("balance");
    if (bmi > 25) {
        document.getElementById("workout_frequency").innerHTML += workout.stretch.workout_frequency[0] + " times a week";
        let [stretches1, stretches2, stretches3, stretches4, stretches5] = workout.stretch.stretches;
        document.getElementById("primary_type").innerHTML = "Stretches";
        document.getElementById("secondary_type").innerHTML = "Cardio";
        document.getElementById("cardio_exercises").innerHTML += workout.stretch.cardio_workouts;
        document.getElementById("stretches").innerHTML += stretches1 + stretches2 + stretches3 + stretches5;
        document.getElementById("plan_number").innerHTML = Math.floor(Math.random() * 1000);
        document.getElementById("plan_specifics").innerHTML += workoutSpecifics;
        document.getElementById("additional").innerHTML += "Secondary Workout Cooldowns";
    }
    else {
        console.log(bmi);
        let [stretches1, stretches2, stretches3, stretches4, stretches5, stretches6] = workout.stretch.stretches;
        let [poses1, poses2, poses3] = workout.stretch.poses;
        document.getElementById("workout_frequency").innerHTML += workout.stretch.workout_frequency[1] + " times a week";
        document.getElementById("weights_exercises").innerHTML += "";
        document.getElementById("stretches").innerHTML += stretches1 + stretches2 + stretches3 + stretches4 + stretches5 + stretches6;
        document.getElementById("poses").innerHTML += poses1 + poses2 + poses3;
        document.getElementById("plan_number").innerHTML = Math.floor(Math.random() * 1000);
        document.getElementById("primary_type").innerHTML = "Stretches";
        document.getElementById("secondary_type").innerHTML = "Poses";
        document.getElementById("cardio_exercises").innerHTML += "";
        document.getElementById("plan_specifics").innerHTML += workoutSpecifics;
    }
}

// plan name and emblem generator function

function generate() {
    userVerb = verbs[
        Math.floor(Math.random() * verbs.length)];
    console.log(userVerb);
    userNoun = nouns[
        Math.floor(Math.random() * nouns.length)];
    console.log(userNoun);
    let planNick = userVerb + userNoun;
    document.getElementById("plan_heading").innerHTML += planNick;
    if (userNoun.includes("Tiger")) {
        document.getElementById("card-header-logo").src += "assets/images/tiger.png";
    }
    else if (userNoun.includes("Dragon")) {
        document.getElementById("card-header-logo").src += "assets/images/dragon.png";
    } else if (userNoun.includes("Leopard")) {
        document.getElementById("card-header-logo").src += "assets/images/leopard.png";
    }
    else if (userNoun.includes("Rhino")) {
        document.getElementById("card-header-logo").src += "assets/images/rhino.png";
    }
    else if (userNoun.includes("Eagle")) {
        document.getElementById("card-header-logo").src += "assets/images/eagle.png";
    }
    else if (userNoun.includes("Wolf")) {
        document.getElementById("card-header-logo").src += "assets/images/wolf.png";
    }
    else if (userNoun.includes("Cobra")) {
        document.getElementById("card-header-logo").src += "assets/images/cobra.png";
    }
    else if (userNoun.includes("Gazelle")) {
        document.getElementById("card-header-logo").src += "assets/images/gazelle.png";
    }
}

// additional resources based on gym access function

function resources() {
    if (document.getElementById("gymno").checked === true) {
        let externalResource = '<a href="https://www.forbes.com/health/fitness/best-online-workout-programs/" target ="_blank">A Guide To Home Workouts</a>';
        document.getElementById("resource_links").innerHTML += externalResource;
    }
    else {
        let externalResource = '<a href="https://www.cnet.com/health/fitness/gym-etiquette-for-newbies-dont-break-these-10-important-rules/" target ="_blank">A Guide To Gym Etiquette</a>';
        document.getElementById("resource_links").innerHTML += externalResource;
    }
}

// print plan specific date and time function

function dateTime() {
    let datetime = new Date();
    console.log(datetime);
    document.getElementById("plan_date").innerHTML += datetime;
}

// validate form functions

function validateUserInfo() {
    let x = document.getElementById("inputEmail").value;
    console.log(x);
    if (x == "") {
        alert("your name and email address must be entered to proceed");
        return false;
    }
    else {
        x = "validatedEmail";
    };

    let y = document.getElementById("inputName").value;
    console.log(y);
    if (y == "") {
        alert("your name and email address must be entered to proceed");
        return false;
    }
    else {
        y = "validatedName";
    };

    if ("validatedName" && "validatedEmail") {
        if (inputEmail.value.match(validRegex)) {
            $("#nextBtn1").removeClass("hiddenbutton");
            $("#userDetails").addClass("hiddenbutton");
        }
        else {
            alert("Invalid email address!");

            document.form1.text1.focus();

            return false;
        }
    };
};

function validateBmi() {
    let x = document.getElementById("inputHeight").value;
    console.log(x);
    if (x == "") {
        alert("your height and weight must be entered to proceed");
        return false;
    }
    else {
        x = "validatedHeight";
    };

    let y = document.getElementById("inputWeight").value;
    console.log(y);
    if (y == "") {
        alert("your height and weight must be entered to proceed");
        return false;
    }
    else {
        y = "validatedWeight";
    };
    if ("validatedHeight" && "validatedWeight") {
        $("#nextBtn4").removeClass("hiddenbutton");
        $("#userBmi").addClass("hiddenbutton");
    }
};

// final cosmetic functions for results

function flipCard() {
    card.classList.toggle("flipCard");
}
