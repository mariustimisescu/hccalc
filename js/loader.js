var btn = document.getElementById('btn');
var infoArea = document.getElementById('info');

btn.addEventListener("click", function () {
    var request = new XMLHttpRequest();
    request.open("GET", "data/players.json");
    request.onload = function () {
        var players = JSON.parse(request.responseText);
        render(players);
    }
    request.send();
});

function render(data) {
    infoArea.insertAdjacentHTML('beforeend', 'test123');
    console.log(players);
}

