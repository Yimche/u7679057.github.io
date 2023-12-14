const firstName = "julian"; //Update your own name here.
var weekDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
var months = [
  "january",
  "feburary",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

function getWelcomeTime(hours) {
  var welcomeString = "";
  if (5 <= hours && hours < 12) welcomeString = "good morning, ";
  else if (12 <= hours && hours < 16) welcomeString = "good afternoon, ";
  else if (16 <= hours && hours < 19) welcomeString = "good evening, ";
  else welcomeString = "good night, ";
  return welcomeString;
}

function getNumSuffix(num) {
  // 1st, 2nd, 3rd, 4th, 5th,
  if (num == 1 || num == 21) return "st";
  if (num == 2 || num == 22) return "nd";
  if (num == 3 || num == 23) return "rd";
  else return "th";
}

function updateTime() {
  var curTime = new Date();
  var hours = curTime.getHours();
  var minutes = curTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var day = weekDays[curTime.getDay()];
  var month = months[curTime.getMonth()];
  var dayNum = curTime.getDate();

  var welcomeString = getWelcomeTime(hours) + firstName + ".";
  var clockString = hours + ":" + minutes;
  var dateString = day + ", " + month + " " + dayNum + getNumSuffix(dayNum);

  document.getElementById("welcome").innerHTML = welcomeString;
  document.getElementById("clock").innerHTML = clockString;
  document.getElementById("date").innerHTML = dateString;
}

setInterval(updateTime, 10);

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    performSearch();
  }
}

function performSearch() {
  var searchTerm = document.querySelector('input').value;
  if (searchTerm.trim() !== '') {
    if (searchTerm.trim().includes('https://')) {
      window.location.href = searchTerm.trim();
    } else if (
      searchTerm.trim().includes('www.')      ||
      searchTerm.trim().includes('.org')      ||
      searchTerm.trim().includes('.com')      ||
      searchTerm.trim().includes('.net')      ||
      searchTerm.trim().includes('.gov')      ||
      searchTerm.trim().includes('.edu')      ||
      searchTerm.trim().includes('.co')       ||
      searchTerm.trim().includes('.io') 
    ) {
      window.location.href = 'https://' + encodeURI(searchTerm.trim());
    } else if (
      searchTerm.trim().includes('127.0.0.1') &&
      searchTerm.trim().includes('.html')
    ) {
      window.location.href = 'http://' + searchTerm;
    } else {
      // var googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
      var duckSearchUrl = 'https://duckduckgo.com/?q=' + encodeURIComponent(searchTerm)
      window.location.href = duckSearchUrl;
    }
    document.querySelector('input').value = '';
  }
}