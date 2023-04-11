var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://raw.githubusercontent.com/JohnARobinson/json_lists/main/animals.json');
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
};
ourRequest.send();
