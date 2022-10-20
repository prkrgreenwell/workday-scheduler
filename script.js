var storedAppointments = JSON.parse(localStorage.getItem("appointments"));

if (storedAppointments["nineArea"] !== null) {
  $("#nineText").text(storedAppointments["nineArea"]);
}
if (storedAppointments["tenArea"] !== null) {
  $("#tenText").text(storedAppointments["tenArea"]);
}
if (storedAppointments["elevenArea"] !== null) {
  $("#elevenText").text(storedAppointments["elevenArea"]);
}
if (storedAppointments["twelveArea"] !== null) {
  $("#twelveText").text(storedAppointments["twelveArea"]);
}
if (storedAppointments["oneArea"] !== null) {
  $("#oneText").text(storedAppointments["oneArea"]);
}
if (storedAppointments["twoArea"] !== null) {
  $("#twoText").text(storedAppointments["twoArea"]);
}
if (storedAppointments["threeArea"] !== null) {
  $("#threeText").text(storedAppointments["threeArea"]);
}
if (storedAppointments["fourArea"] !== null) {
  $("#fourText").text(storedAppointments["fourArea"]);
}
if (storedAppointments["fiveArea"] !== null) {
  $("#fiveText").text(storedAppointments["fiveArea"]);
}

var now = dayjs().format("dddd MMM D, YYYY");

$("#currentDay").text(now);

var hour = dayjs().hour();

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

var textAreas = [
  $("#nineText"),
  $("#tenText"),
  $("#elevenText"),
  $("#twelveText"),
  $("#oneText"),
  $("#twoText"),
  $("#threeText"),
  $("#fourText"),
  $("#fiveText"),
];

$(".saveBtn").on("click", function (event) {
  event.preventDefault();

  var savedText = {
    nineArea: $("#nineText").val(),
    tenArea: $("#tenText").val(),
    elevenArea: $("#elevenText").val(),
    twelveArea: $("#twelveText").val(),
    oneArea: $("#oneText").val(),
    twoArea: $("#twoText").val(),
    threeArea: $("#threeText").val(),
    fourArea: $("#fourText").val(),
    fiveArea: $("#fiveText").val(),
  };

  localStorage.setItem("appointments", JSON.stringify(savedText));
});
