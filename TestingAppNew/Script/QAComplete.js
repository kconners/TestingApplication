function loadReleases(_client_idnum,_selectID) {
    let dropdown = $('#' + _selectID);
    dropdown.empty();
    dropdown.prop('selectedIndex', 0);

    $.getJSON(qadataendPoint + "/Releases?Client_IDNUM=" + _client_idnum +"&Type=Release", function (obj) {
        $.each(obj, function (idx, item) {
            $.each(item, function (i, ii) {
                    dropdown.append($('<option></option>').attr('value', ii.ID).text(ii.Title));
            });

        });
    });
    dropdown.prop('selectedIndex', 1);
}
function GetReleaseIDNUM(RelNumber) {
    return new Promise(function (resolve, reject) {
    $.getJSON(qadataendPoint + "/Releases?ID=" + RelNumber  , function (obj) {
        $.each(obj, function (idx, item) {
            resolve(item.Release_IDNumber);
        });
        });
    });
}


function loadIterations(_release_idnum, _selectID) {
    var _iterationVal;
    let dropdown = $('#' + _selectID);
    dropdown.empty();
    dropdown.prop('selectedIndex', 0);

    $.getJSON(qadataendPoint + "/Releases/" + _release_idnum+"/iteration", function (obj) {
        $.each(obj, function (idx, item) {
            $.each(item, function (i, ii) {
                _iterationVal = ii.ID;
                dropdown.append($('<option></option>').attr('value', ii.ID).text(ii.Title));
            });
        });

        if ($('#' + _selectID).length === 1) {

            GetReleaseIDNUM(_iterationVal).then(function (value) {
                loadBuilds(value, "Select_build")
            });
        }

    });
    dropdown.prop('selectedIndex', 1);
}

function loadBuilds(_iterations_idnum, _selectID) {
    let dropdown = $('#' + _selectID);
    dropdown.empty();
    dropdown.prop('selectedIndex', 0);

    $.getJSON(qadataendPoint + "/Releases/" + _iterations_idnum + "/builds", function (obj) {
        $.each(obj, function (idx, item) {
            $.each(item, function (i, ii) {
                dropdown.append($('<option></option>').attr('value', ii.ID).text(ii.Title));
            });
        });

        if ($('#' + _selectID).length === 1) {

            CheckOnLoyaltyware();

        
            };
        

    });
    dropdown.prop('selectedIndex', 1);
}