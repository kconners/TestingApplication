

function login() {
    var username = document.getElementById("tb_username").value;
    var password = encrypt(document.getElementById("tb_password").value);

    LOGIN(username, password);

}
function LOGIN(_username, _password) {
    var data = null;
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var user = JSON.parse(this.responseText);
            setCookie("username", user.user.username, 1);

            window.location = "index.html";

        }
    });

    xhr.open("GET", "http://cy2qawbs06.brierley.com:8115/api/Users/Login?Username=" + _username + "&Password=" + _password);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.send(data);
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    alert(cname + "=" + cvalue + ";" + expires + ";path=/");
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}
function encrypt(value) {
    var data = null;
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            return (this.responseText);
        }
    });

    xhr.open("GET", "http://cy2qawbs06.brierley.com:8115/api/Users/Encrypt?value=" + value);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.send(data);

}
