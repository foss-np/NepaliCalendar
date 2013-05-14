// map english digit to nepali
var nepDigit = ['', '१', '२', '३', '४', '५', '६', '७', '८', '९', '१०', '११', '१२', '१३', '१४', '१५', '१६', '१७', '१८', '१९', '२०', '२१', '२२', '२३', '२४', '२५', '२६', '२७', '२८', '२९', '३०', '३१', '३२'];

$(document).ready(function() {
    for ( var i = 2000; i < 2090; i++)
        $("#nep-year").append("<option id='" + i + "'>" + i + "</option>");
});

function getCorresEngDay(date) {
    var temp = new Object();
    temp = neptoeng.DateConversion(date, 9, 2046);
    return temp.getDate();
}

