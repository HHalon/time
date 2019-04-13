// Initialize Firebase
var config = {
  apiKey: "AIzaSyCRvho7D4Jlo2OLu6h-zlTC7-36BBWBZ-o",
  authDomain: "time-b9af6.firebaseapp.com",
  databaseURL: "https://time-b9af6.firebaseio.com",
  projectId: "time-b9af6",
  storageBucket: "",
  messagingSenderId: "772839263924"
};
firebase.initializeApp(config);

var database = firebase.database();

var name = " ";
var role = " ";
var startDate = timestamp;
var monthlyrate = 0;
// captur button on click
$("#add-user").on("click", function(event) {
  event.preventDefault();

  event.preventDefault();
  name = $("#name")
    .val()
    .trim();
  role = $("#role")
    .val()
    .trim();
  startDate = $("start-date")
    .val()
    .trim();
  monthlyrate = $("#monthly-rate")
    .val()
    .trim();
  database.ref().set({
    name: name,
    role: role,
    startDate: startDate,
    monthlyrate: monthlyrate
  });
});

database.ref().on(
  "value",
  function(snapshot) {
    $("#name").text(snapshot.val(), name);
    $("#role").text(snapshot.val(), role);
    $("#start-date").text(snapshot.val(), startDate);
    $("#monthly-rate").text(snapshot.val(), monthlyrate);
  },
  function(errorObject) {
    console.log("errors handled: " + errorObject.code);
  }
);
