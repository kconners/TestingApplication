function LoadClients(_selectID) {
    tkn = getCookie('okenTeh');

    let dropdown = $('#' + _selectID);
    dropdown.empty();
    dropdown.prop('selectedIndex', 0);

    $.getJSON(qadataendPoint + "/UserClientMapping/" + tkn + "?type=1", function (obj) {
        $.each(obj, function (idx, item) {
            $.each(item, function (i, ii) {
                if (ii.show === 2) {
                    dropdown.append($('<option></option>').attr('value', ii.client_idnum).text(ii.client));
                }
            });

        });


    });
    dropdown.prop('selectedIndex', 1);
}
function loadTestClient(_release, _build, _selectID) {
    
    let dropdown = $('#' + _selectID);
    dropdown.empty();
    dropdown.prop('selectedIndex', 0);

    $.getJSON(qadataendPoint + "/TestClient/?release=" + _release + "&build=" + _build, function (obj) {
        $.each(obj, function (idx, item) {
            $.each(item, function (i, ii) {
                if (ii.show === 2) {
                    dropdown.append($('<option></option>').attr('value', ii.client_idnum).text(ii.client_name));
                }
            });

        });


    });
    dropdown.prop('selectedIndex', 1);
}