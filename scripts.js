
function getParams() {
    let params = new URLSearchParams(location.search);
    console.log(params)
    var code = document.getElementById("code");
    if (params.get('code') != null) {
        code.textContent = params.get('code');
    } else {
        code.textContent = 'Sem informações!';
    }
    var state = document.getElementById("state");
    if (params.get('state') != null) {
        state.textContent = params.get('state');
    } else {
        state.textContent = 'Sem informações!';
    }
}

getParams()