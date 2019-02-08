var allPlayers = [];
var allTowers = [];
var towerNo = 0;

window.onload = function () {
    var btnNewWar = document.getElementById("btnNewWar");
    btnNewWar.addEventListener("click", onClickNewWar);
    var btnAddTower = document.getElementById("btnAddTower");
    btnAddTower.addEventListener("click", onClickAddTower);
    loadPlayers();
    loadTowers();
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

function onClickNewWar() {
    fillAvailablePlayersColumn(allPlayers);

    console.log(allPlayers);
}

function onClickAddTower() {
    towerNo++;
    var towerConfigurationRow = document.getElementById("towerConfigurationRow");

    var div = document.createElement("div");
    div.setAttribute("class","column");
    towerConfigurationRow.appendChild(div);

    var ul = document.createElement("ul");
    ul.setAttribute("class", "connected-sortable droppable-area2");
    ul.setAttribute("id", "tower" + towerNo);

    var towerText = document.createTextNode("Turn "+towerNo);
    ul.appendChild(towerText);
    div.appendChild(ul);

    console.log(allTowers);
}

function simplifySP(sp) {
    var result = "";
    var spInt = parseInt(sp);
    if (spInt > 1000000) {
        result = (parseFloat(spInt / 1000000).toFixed(3)).toString() + "m";
    } else if (spInt > 9999) {
        result = (parseFloat(spInt / 1000).toFixed(0)).toString() + "k";
    } else {
        result = spInt.ToString();
    }
    return result;
}

function fillAvailablePlayersColumn(data) {
    for (var i = 0; i < data.length; i++) {
        var pi = data[i];
        var ul = document.getElementById("availablePlayers");
        var li = document.createElement("li");
        li.setAttribute("id", "player" + pi.id);
        li.setAttribute("class", "draggable-item");
        var playerText = document.createTextNode(pi.playerName);
        li.appendChild(playerText);
        playerText = document.createElement("br");
        li.appendChild(playerText);
        playerText = document.createTextNode("TR" + pi.throneRoom + " " + simplifySP(pi.squadPower));
        li.appendChild(playerText);
        ul.appendChild(li);
    };
    //console.log(data);
};

function loadAllTowers() {

}