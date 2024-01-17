
function getParams() {
    let params = new URLSearchParams(location.search);
    console.log(params)
    var code = document.getElementById("code");
    if (params.get('code') != null) {
        code.textContent = 'Code: ' + params.get('code');
    } else {
        code.textContent = 'Code: Sem informações!';
    }

    var shop_id = document.getElementById("shop_id");
    if (params.get('shop_id') != null) {
        shop_id.textContent = 'Shop_id: ' + params.get('shop_id');
    } else {
        shop_id.textContent = 'Shop_id: Sem informações!';
    }

    var main_account_id = document.getElementById("main_account_id");
    if (params.get('main_account_id') != null) {
        main_account_id.textContent = 'main_account_id: ' + params.get('main_account_id');
    } else {
        main_account_id.textContent = 'main_account_id: Sem informações!';
    }

    var state = document.getElementById("state");
    if (params.get('state') != null) {
        state.textContent = 'state: ' + params.get('state');
    } else {
        state.textContent = 'state: Sem informações!';
    }
}

getParams()