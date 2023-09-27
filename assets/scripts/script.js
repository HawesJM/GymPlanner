// global variables

const form = document.getElementById("details-form");
form.addEventListener("submit", getUserDetails);

const steps = document.getElementsByClassName("step");

let userData = {};

// work in progress
let bmi = {};

let workout = {
    "lose_weight": {
        "workout_frequency": 3,
        "cardio_workouts": ["rowing", "cycling"]
    }
};
// work in progress

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
};
