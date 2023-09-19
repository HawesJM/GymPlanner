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