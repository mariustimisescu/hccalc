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