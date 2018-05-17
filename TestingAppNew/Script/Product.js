function loadLWVersion() {
    var version_idnumber = "0"

    let dropdown = $('#Select_LWVersion');
    dropdown.empty();
    $.getJSON(qadataendPoint+"/LoyaltyVersion", function (obj) {
        $.each(obj, function (idx, item) {
            
            $.each(item, function (i, ii) {
                if (version_idnumber == "0") {
                    version_idnumber = ii.version_idnumber;
                    console.log(version_idnumber);

                    loadLWBuild(version_idnumber);
                }
                dropdown.append($('<option></option>').attr('value', ii.version_idnumber).text(ii.version_name));
            });
            
        });
                
            
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


    });
    dropdown.prop('selectedIndex', 1);
}