function loadLWVersion() {
    console.log("hELLO");
    $.getJSON("http://cy2qawbs06.brierley.com:8115/api/LoyaltyVersion", function (obj) {
        $.each(obj, function (key, value) {
            $("select").append($('<option>', { value: obj.version_idnumber, text: obj.version_name }))
            console.log(obj.version_name);
        });
    });
}