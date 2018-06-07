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

        if ($('#Select_Build option').length === 1) {

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


function loadEnvURLs() {
    var _orgIdnumber = $('#Select_org').val();
    var _orgenvIdnumber = $('#Select_orgenv').val();
    
    $.getJSON(qadataendPoint + "/TestClient/URLS?client_idnum=" + _orgIdnumber + "&env_idnum=" + _orgenvIdnumber, function (obj) {
        $.each(obj, function (idx, item) {
            console.log('"' + idx + '" item "' + item);
            $.each(item, function (i, ii) {
                console.log('"' + i + '" item "' + ii);
                if (i === "CSURL") {
                    $("#link_csportal").attr("href", ii);
                    $("#link_csportal").text(ii);
                }
                else if (i === "MPURL") {
                    $("#link_memberportal").attr("href", ii);
                    $("#link_memberportal").text(ii);
                }
                else if (i === "APIURL") {
                    $("#link_cdis").attr("href", ii);
                    $("#link_cdis").text(ii);
                }
                else if (i === "MGWURL") {
                    $("#link_mobilegateway").attr("href", ii);
                    $("#link_mobilegateway").text(ii);
                }
                else if (i === "RESTURL") {
                    $("#link_rest").attr("href", ii);
                    $("#link_rest").text(ii);
                }
                else if (i === "Schema") {
                    $("#label_OEshema").text(ii);
                }
                else if (i === "NET") {
                    $("#label_NET").text(ii);
                }
                else if (i === "JAR") {
                    $("#label_JAR").text(ii);
                }
            });

        });


    });
    
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

        if ($('#Select_org option').length === 1) {
            
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

        loadEnvURLs();
    });
}