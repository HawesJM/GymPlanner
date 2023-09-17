$(document).ready(function () {
    $("#form-container").click(function () {
        $("#form-fill").slideDown("fast");
        $("#start-button").hide();
        $("#form-container").addClass("quiz-background");
    });
});