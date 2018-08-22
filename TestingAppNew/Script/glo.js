function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function getUserPermission(token, value) {
    return new Promise(function (resolve, reject) {
        var data = null;
        var xhr = new XMLHttpRequest();
      
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
                val = JSON.parse(this.responseText);
                console.log(val.Value);
                resolve(val.Value);
            }
        });

        xhr.open("GET", qadataendPoint + "/Users/TKN/" + token + "/?val=" + value, false);
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    });
}
function getProgram(Org_IDNUM, ProgramName) {
    return new Promise(function (resolve, reject) {
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status === 200) {
                val = JSON.parse(this.responseText);

                for (i = 0; i < val.programs.length; i++) {
                    if (val.programs[i].prg_shrt === ProgramName) {
                        resolve(val.programs[i]);
                    }
                }
                //for (var i in val) {
                //    alert(i.programs.prg_shrt);



                // //   alert(pg.prg_shrt);
                //  //  if (pg.prg_shrt == ProgramName) { resolve(pg);}
                //}


            }
        });

        xhr.open("GET", qadataendPoint + "/Program?client_idnum=" + Org_IDNUM, false);
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    });
}
function GetEnvironment(EnvName) {
    return new Promise(function (resolve, reject) {
        $.getJSON(qadataendPoint + "/Environment?Name=" + EnvName, function (obj) {
            $.each(obj, function (idx, item) {
                console.log(item[0].Env_IDNumber);
                console.log(item[0]);
                resolve(item[0].Env_IDNumber);
            });
        });
    });
}
    function getApplication(AppShortName) {
        return new Promise(function (resolve, reject) {
            var data = null;
            var xhr = new XMLHttpRequest();

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4 && this.status === 200) {

                    val = JSON.parse(this.responseText);
                    resolve(val.applications.Application_IDNumber);
                }
            });

            xhr.open("GET", qadataendPoint + "/Applications?parameter=ap_srtname&value=" + AppShortName, false);
            xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.send(data);
        });
}
