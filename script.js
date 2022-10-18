var now = dayjs().format("dddd MMM D, YYYY");

$("#currentDay").text(now);

var hour = dayjs().hour();
console.log(now);
console.log(hour);

var hourRows = [
  $("#nine"),
  $("#ten"),
  $("#eleven"),
  $("#twelve"),
  $("#one"),
  $("#two"),
  $("#three"),
  $("#four"),
  $("#five"),
];

console.log(hourRows);

function colorRows() {
  var colorVar = hour - 9;
  for (var i = 0; i < hourRows.length; i++) {
    if (colorVar > i) {
      hourRows[i].addClass("past");
    } else if (colorVar < i) {
      hourRows[i].addClass("future");
    } else {
      hourRows[i].addClass("present");
    }
  }
}

colorRows();
