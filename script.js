function ageCalculate() {
  let today = new Date();
  let inputDate = new Date(document.getElementById("date-input").value);
  var milliDay = 1000 * 60 * 60 * 24;

  var ageInDays = (today - inputDate) / milliDay;

  var ageInYears = Math.floor(ageInDays / 365);
  var age = ageInDays / 365;
  document.getElementById("years").innerHTML = ageInYears;
}