var allPlayers = [];
var allTowers = [];
var towerNumber = 1;
new Sortable(available, { group: 'shared', animation: 150 });

window.onload = function () {
    LoadJsonData();

    var btnNewWar = document.getElementById("btnNewWar");
    btnNewWar.addEventListener("click", onClickNewWar);
    var btnAddTower = document.getElementById("btnAddTower");
    btnAddTower.addEventListener("click", addTower);
    console.log("onLoad");
}

function LoadJsonData() {
    loadPlayers();
    loadTowers();
}
