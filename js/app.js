
'use strict';

angular.module('Calendarapp', ['Calendarapp.controllers', 'Calendarapp.filters']);

// map english digit to nepali
var nepDigit = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९', '१०', '११', '१२', '१३', '१४', '१५', '१६', '१७', '१८', '१९', '२०', '२१', '२२', '२३', '२४', '२५', '२६', '२७', '२८', '२९', '३०', '३१', '३२'];

var nepMonth = ['', 'बैशाक', 'जेष्ठ', 'असार', 'सावन', 'भाद्र', 'असोज', 'कर्तिक', 'मँसिर', 'पुस', 'माघ', 'फल्गुन', 'चैत्र'];

var engMonth = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

var nepengMonth = ['', 'Apr-May', 'May-June', 'June-July', 'July-Aug', 'Aug-Sept', 'Sept-Oct', 'Oct-Nov', 'Nov-Dec', 'Dec-Jan', 'Jan-Feb', 'Feb-Mar', 'Mar-Apr', ];

var np_month, np_date, np_year;

function getCorresEngDay(date) {
    var temp = new Object();
    temp = neptoeng.DateConversion(date, 1, 2070);
    return temp.getDate();
}

function changeTonep(month, year) {
    return nepMonth[month] + ' ' + nepDigit[year[0]] + nepDigit[year[1]] + nepDigit[year[2]] + nepDigit[year[3]];   
  }