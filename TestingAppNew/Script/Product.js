function loadLWVersion() {
    var version_idnumber = "0"

    let dropdown = $('#Select_LWVersion');
    dropdown.empty();
    $.getJSON(qadataendPoint+"/LoyaltyVersion", function (obj) {
        $.each(obj, function (idx, item) {
            
            $.each(item, function (i, ii) {
                if (version_idnumber === "0") {
                    version_idnumber = ii.version_idnumber;
                    console.log(version_idnumber);

                    loadLWBuild(version_idnumber);
                }
                dropdown.append($('<option></option>').attr('value', ii.version_idnumber).text(ii.version_name));
            });
            
        });
                
        loadLWBuild();
        });

    //$('select option:first-child').attr("selected", "selected");

   
}
function loadLWBuild(Version_IDNUM) {
    let dropdown = $('#Select_Build');
    dropdown.empty();
    dropdown.prop('selectedIndex', 0);

    $.getJSON(qadataendPoint + "/LoyaltyBuild?version_idnum=" + Version_IDNUM, function (obj) {
        $.each(obj, function (idx, item) {
            $.each(item, function (i, ii) {
                dropdown.append($('<option></option>').attr('value', ii.build_idnumber).text(ii.build_name));
            });

        });


    });
    dropdown.prop('selectedIndex', 1);
}
function loadLWBuild() {
    var Version_IDNUM = $('#Select_LWVersion').val();
    let dropdown = $('#Select_Build');
    dropdown.empty();
    dropdown.prop('selectedIndex', 0);
    
    $.getJSON(qadataendPoint +"/LoyaltyBuild?version_idnum=" + Version_IDNUM, function (obj) {
        $.each(obj, function (idx, item) {
            $.each(item, function (i, ii) {
                dropdown.append($('<option></option>').attr('value', ii.build_idnumber).text(ii.build_name));
            });

        });

        if ($('#Select_Build option').length == 1) {

            loadVersionBuildInfo();
        }
    });
    dropdown.prop('selectedIndex', 1);
}
function loadVersionBuildInfo() {
   
    var _versionIDNUM = $('#Select_LWVersion').val();
    var _buildIDNUM = $('#Select_Build').val();

    $.getJSON(qadataendPoint + "/VersionBuildDetails?version_idnum=" + _versionIDNUM + "&build_idnum=" + _buildIDNUM, function (obj) {
        $.each(obj, function (idx, item) {
            $.each(item, function (i, ii) {
                if (i === "url") {
                    $("#link_loyaltynavigator").attr("href", ii);
                    $("#link_loyaltynavigator").text(ii);
                }
                if (i === "schema") {
                    $("#label_navigatorshema").text(ii);
                }
            });

        });


    });

    loadOrgs();

   
}



function loadOrgs() {
    var _version = $('#Select_LWVersion option:selected').text();
    var _build = $('#Select_Build option:selected').text();
    let dropdown = $('#Select_org');
    dropdown.empty();
    $.getJSON(qadataendPoint + "/TestClient?release=" + _version + "&build=" + _build, function (obj) {
        $.each(obj, function (idx, item) {

            $.each(item, function (i, ii) {
                dropdown.append($('<option></option>').attr('value', ii.client_idnum).text(ii.client_name));
            });
        });

        if ($('#Select_org option').length == 1) {
            
            loadOrgsEnv();
        }
    });
    
}

function loadOrgsEnv() {
    var org_IDNUM = $('#Select_org').val();
    let dropdown = $('#Select_orgenv');
    dropdown.empty();


    $.getJSON(qadataendPoint + "/TestClientEnv?Org_IDNUM=" + org_IDNUM, function (obj) {
        $.each(obj, function (idx, item) {
            $.each(item, function (i, ii) {
                dropdown.append($('<option></option>').attr('value', ii.Env_IDNumber).text(ii.Environment));
            });

        });


    });
    dropdown.prop('selectedIndex', 1);
}