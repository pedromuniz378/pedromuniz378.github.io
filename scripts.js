
function getParams() {
    let params = new URLSearchParams(location.search);
    var paragraph = document.getElementById("p");
    if (params.get('code') != null) {
        paragraph.textContent = params.get('code');
    } else {
        paragraph.textContent = 'Sem informações!';
    }
}

getParams()