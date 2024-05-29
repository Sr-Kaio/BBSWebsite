
window.onload = function () {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.mcstatus.io/v2/status/java/BBS1D9rj.aternos.me";
    xmlhttp.open("GET", url, true);

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            document.getElementById("playeramount").innerHTML = json.players.online
        }
    };
};

function basicCopy(textToCopy) {
    navigator.clipboard.writeText(textToCopy);
}