var activeTowers = [];

function deleteAllTowers(){

}

function addTower(){
    var selectedTowersArea = document.getElementById("selectedTowersArea");

    var newTower = document.createElement("div");
    newTower.setAttribute("id", "t"+towerNumber);
    newTower.setAttribute("class", "list-group col");    
    newTower.appendChild(document.createTextNode("T"+towerNumber));
    new Sortable(newTower, { group: 'shared', animation: 150 });

    selectedTowersArea.appendChild(newTower);
    towerNumber++;
}