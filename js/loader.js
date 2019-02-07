var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    var request = new XMLHttpRequest();
    request.open("GET", "data/players.json");
    request.onload = function() {
        var players = JSON.parse(request.responseText);
        console.log(players);
    }
    request.send();
});

