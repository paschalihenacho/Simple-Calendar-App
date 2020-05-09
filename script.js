
var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH");
var currentHourInt = parseInt(currentHour);

//Assigning attribute to the hours of time
$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH")); // 9AM
$("#10Row").attr("data-time", moment("10:00 am", "hh:mm a").format("HH")); // 10AM
$("#11Row").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));// 11AM
$("#12Row").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));// 12noon
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));// 1PM
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));// 2PM
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));// 3PM
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));// 4PM
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));// 5PM

$(document).ready(function () {

  // Show Date and Time in Header 
  $("#currentDay").append();

  function addDate() { 
  $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
  
  } setInterval(addDate, 1000);
})
