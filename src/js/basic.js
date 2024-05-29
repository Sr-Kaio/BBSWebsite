
window.onload = function () {
    const apiUrl = `https://api.mcstatus.io/v2/status/java/BBS1D9rj.aternos.me`;

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("asasd");
                const data = JSON.parse(xhr.responseText);
            }
        }
    };

    xhr.open('GET', apiUrl);
};

function basicCopy(textToCopy) {
    navigator.clipboard.writeText(textToCopy);
}