// map english digit to nepali
var nepDigit = ['', '१', '२', '३', '४', '५', '६', '७', '८', '९', '१०', '११', '१२', '१३', '१४', '१५', '१६', '१७', '१८', '१९', '२०', '२१', '२२', '२३', '२४', '२५', '२६', '२७', '२८', '२९', '३०', '३१', '३२'];

var nepMonth = ['', 'बैशाक', 'जेष्ठ', 'असार', 'सावन', 'भाद्र', 'असोज', 'कर्तिक', 'मँसिर', 'पुस', 'माघ', 'फल्गुन', 'चैत्र'];

var engMonth = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

$(document).ready(function() {
    load();
});

function load() {
    /*
    for ( var i = 2000; i <= 2090; i++) {
        $(".engyear").append("<option id='" + i + "'>" + i + "</option>");
    }
    */

}

function getCorresEngDay(date) {
    var temp = new Object();
    temp = neptoeng.DateConversion(date, 1, 2070);
    return temp.getDate();
}

