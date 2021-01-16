var hour9 = $("#9");
var hour9 = $("#10");
var hour9 = $("#11");
var hour9 = $("#12");
var hour9 = $("#13");
var hour9 = $("#14");
var hour9 = $("#15");
var hour9 = $("#16");
var hour9 = $("#17");
var time = moment();

function setPlanner() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (Schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}