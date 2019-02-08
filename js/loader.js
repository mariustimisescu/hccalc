var allPlayers = [];
var allTowers = [];

window.onload = function () {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", onClick);
    loadPlayers();
    loadTowers();
    fillAvailablePlayersColumn(allPlayers);
}

function loadPlayers() {
    var request = new XMLHttpRequest();
    request.open("GET", "data/players.json");
    request.onload = function () {
        allPlayers = JSON.parse(request.responseText);
        console.log("Loaded players");
    }
    request.send();
}

function loadTowers() {
    var request = new XMLHttpRequest();

    request.open("GET", "data/towers.json");
    request.onload = function () {
        allTowers = JSON.parse(request.responseText);
        console.log("Loaded towers");

    }
    request.send();
}

function onClick() {
    console.log(allPlayers);
}

function fillAvailablePlayersColumn(data) {
    for (var i = 0; i < data.length; i++) {
        var pi = data[i];
        var ul = document.getElementById("availablePlayers");
        var li = document.createElement("li");
        li.setAttribute("id", "player" + pi.id);
        li.setAttribute("class", "draggable-item");
        li.appendChild(document.createTextNode(pi.playerName));
        ul.appendChild(li);
    };
    //console.log(data);
};

function loadAllTowers() {

}