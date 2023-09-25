$(document).ready(function () {
    $("#start-button").click(function () {
        $("#details-form").slideDown("fast");
        $("#start-button").hide();
        $("#form-container").addClass("quiz-background");
        $("#form-progress").removeClass("steps-hidden");
    });
});

// form page 1 progress function

$("#nextBtn1").click(function () {
    $("#personal-info").slideUp("fast");
    $("#workoutinfo").removeClass("workout-info-next");
});

// form page 2 progress function

$(".workout-type-form").click(function () {
    $("#nextBtn2").removeClass("hiddenbutton");
});

$("#nextBtn2").click(function () {
    $("#workoutinfo").slideUp("fast");
    $("#membership-status").addClass("membership-status-show");
});

// form page 3 progress function

$("#membership-status").click(function () {
    $("#nextBtn3").removeClass("hiddenbutton");
});

$("#nextBtn3").click(function () {
    $("#membership-status").slideUp("fast");
    $("#stats").removeClass("stats-hidden");
});

// form page 4 progress function

$("#nextBtn4").click(function () {
    $("#stats").slideUp("fast");
    $("#times").removeClass("times-hidden");
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

// creating variables

// get username  and email functions

const form = document.getElementById("details-form");
form.addEventListener("submit", getUserName);

let userName = "";
console.log("username is", userName);

let emailAddress = "";
console.log("email address is", emailAddress);

function getUserName(event) {
    console.log("getUserName");
    event.preventDefault();
    console.log(event);
    userName = document.getElementById("inputName").value;
    console.log(userName);
    printUsername();
    emailAddress = document.getElementById("inputEmail").value;
    console.log(emailAddress);
    printEmail();
}

function printUsername() {
    console.log(userName);
}

function printEmail() {
    console.log(emailAddress);
}

// attempt to get workout types function

form.addEventListener("submit", getWorkoutType);

function getWorkoutType() {
    let workoutType = document.getElementsByName("workout-type").checked;

}

