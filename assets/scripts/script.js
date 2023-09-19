$(document).ready(function () {
    $("#form-container").click(function () {
        $("#personal-form").slideDown("fast");
        $("#start-button").hide();
        $("#form-container").addClass("quiz-background");
    });
});
