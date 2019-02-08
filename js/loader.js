var allPlayers = [];
var allTowers = [];

window.onload = function () {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", onClick);
}

function loadDataFromJson() {
    var request = new XMLHttpRequest();
    request.open("GET", "data/players.json");
    request.onload = function () {
        allPlayers = JSON.parse(request.responseText);
    }
    request.send();

    request.open("GET", "data/towers.json");
    request.onload = function () {
        allTowers = JSON.parse(request.responseText);
    }
    request.send();
}

function onClick() {

    //console.log(players);
    loadAllPlayers(allPlayers);

}

function loadAllPlayers(data) {
    for (var i = 0; i < data.length; i++) {
        var pi = data[i];
        addAvailablePlayer(pi);
    };
    //console.log(data);
};

function addAvailablePlayer(pi) {
    var ul = document.getElementById("availablePlayers");
    var li = document.createElement("li");
    li.setAttribute("id", "player" + pi.id);
    li.setAttribute("class", "draggable-item");
    li.appendChild(document.createTextNode(pi.playerName));
    ul.appendChild(li);
}

function loadAllTowers() {

}