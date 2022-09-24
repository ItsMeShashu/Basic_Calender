const dt = new Date();
const dt2 = new Date();
function fetch_calender() {
  dt.setDate(1); //Set date to 1 for dt object.
  const first_day = dt.getDay(); // Becoz now the date is 1 so this statement gives us day of date 1.

  const last_date = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate(); //It will fetch only the last date of present month .

  const prev_month_last_date = new Date(
    dt.getFullYear(),
    dt.getMonth(),
    0
  ).getDate();

  const present_date = new Date().getDate(); //IT WILL RETURN TODAY'S DATE

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.getElementById("year").innerHTML = dt2.toDateString();
  document.getElementById("month").innerHTML =
    months[dt.getMonth()] + "," + dt.getFullYear();

  var box = "";

  for (i = first_day; i > 0; i--) {
    //TO PRINT THE REMAINING DATES OF PREVIOUS MONTH
    box +=
      "<div class = 'pre_month'>" + (prev_month_last_date - i + 1) + "</div>";
  }

  for (j = 1; j <= last_date; j++) {
    //TO PRINT THE ACTUAL DATES OF THE SELECTED MONTH AND YEAR .
    // if(j == present_date && dt.getMonth() == present_date.getMonth()) {
    //     box += "<div class = 'abc'>" + j + "</div>" ;
    // }
    // else
    box += "<div>" + j + "</div>";
  }

  document.getElementById("day_no").innerHTML = box; //AND IT PRINTS THE PRESENT AND PAST DATES
}

function moveCalender(command) {
  if (command == "back") {
    dt.setMonth(dt.getMonth() - 1); //On pressing back button it will show previous month's dates.
  } else if (command == "front") {
    dt.setMonth(dt.getMonth() + 1);
  }

  fetch_calender(); // TO print the calender after checking above condition .
}

// document.getElementById("month").innerHTML = "August" ;
// var dates_array = {
// };
// var start_date;
// console.log(start_date);
// var toady = dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate();
// var curr_date;
//  var i =0;
// while(curr_date != toady){
//     start_date = new Date(i * 24 * 60* 60* 1000);
//     curr_date = start_date.getFullYear()+'-'+(start_date.getMonth()+1)+'-'+start_date.getDate();
//     // var days =
//     // dates_array[start_date.getFullYear()] =
//     // console.log(curr_date);
//     i++;
// }
