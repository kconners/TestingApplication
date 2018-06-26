
var user;
var pw;
function login() {
    var username = document.getElementById("tb_username").value;

    encrypt(document.getElementById("tb_password").value)
        .then(LOGIN(username, pw))
        .then(new function () { window.location = "index.html"; });
        }

function Enter() {
    const node = document.getElementById("tb_password")[0];
    node.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            login();
        }
    });
}
function LOGIN(_username, _password) {
    return new Promise(function (resolve, reject) {
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                user = JSON.parse(this.responseText);
                console.log(this.responseText);
                setCookie("username", user.user.username, 1);
                setCookie("okenTeh", user.user.token, 1);
               
                resolve(user);
               
            }
            else {
              reject(Error(xhr.statusText));
                
            }
        });

        xhr.open("POST", "http://cy2qawbs06.brierley.com:8115/api/Users/Login?Username=" + _username + "&Password=" + _password, false);
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    });
}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(name) {
    var dc = document.cookie;
    alert("dc = '" + dc + "'");
    console.log("dc = '" + dc + "'");
    var prefix = name + "=";
    console.log("prefix = '" + prefix + "'");
    alert("prefix = '" + prefix + "'");
    var begin = dc.indexOf("; " + prefix);
    console.log("begin = '" + begin + "'");
    alert("begin = '" + begin + "'");



    if (begin === -1) {
            begin = dc.indexOf(prefix);
            if (begin !== 0) return null;
            }
    else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end === -1) {
            end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}
function encrypt(value) {
    return new Promise(function (resolve, reject) {
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status === 200) {
                pw = this.responseText;
                resolve(this.responseText);
            }
            else {
                reject(Error(xhr.statusText));
            } 

        });

        xhr.open("GET", "http://cy2qawbs06.brierley.com:8115/api/Users/Encrypt?value=" + value, false);
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    });
}
