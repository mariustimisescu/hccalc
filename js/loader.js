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

function onClickNewWar() {
    // fillAvailablePlayersColumn(allPlayers);
    console.log(allPlayers);
}

function fillAvailablePlayersColumn(data) {
    for (var i = 0; i < data.length; i++) {
        var pi = data[i];
        var ul = document.getElementById("availablePlayers");
        var li = document.createElement("li");
        li.setAttribute("id", "player" + pi.id);
        li.setAttribute("drag", "item");
        li.setAttribute("class", "draggable-item");

        ul.appendChild(li);

        var div = document.createElement("div");
        var playerText = document.createTextNode("TR" + pi.throneRoom + " " + pi.playerName + " " + simplifySP(pi.squadPower));
        div.appendChild(playerText);
        li.appendChild(div);

    };
    //console.log(data);
};

function loadAllTowers() {

}