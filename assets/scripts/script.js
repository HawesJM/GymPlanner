$(document).ready(function () {
    $("#start-button").click(function () {
        $("#details-form").slideDown("fast");
        $("#start-button").hide();
        $("#form-container").addClass("quiz-background");
    });
});

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
    $("#membership-status").removeClass(".membership-status-hidden");
});