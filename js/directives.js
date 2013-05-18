'use strict'

angular.module('Calendarapp.directives', [])
  .directive('nepCalendar', function() {
    return {
      restrict: 'E',
      replace: true,
      link: function($scope, $element, $attrs)
      {

        // check if BS to AD button is pressed
        $scope.$watch('BStoAD_button', function(newval, oldval) { 

          // get all variables
          var selmonth = $scope.selectedNepMonth;
          var seldate = $scope.selectedNepDate;
          var selyear = $scope.selectedNepYear;

          // convert to AD
          if (typeof selyear === 'undefined' || typeof selmonth  === 'undefined' || typeof selyear  === 'undefined' ) {
          } else {

            var main = new Object();
            main = neptoeng.DateConversion(seldate,selmonth,selyear);

            // get AD parameters
            var month = parseInt(main.getMonth(), 10);
            var year = parseInt(main.getYear(), 10);
            var totaldays = parseInt(main.getTotalDays(), 10);
            var day = 1;
            var date = parseInt(main.getDayOW(), 10);
            var ft = 0;   // for initial blank blocks
            var htmlelem =  '<div class="row">' +
                            '<ul class="day-container small-block-grid-7">' +
                            '<div class="month-wrapper row">' +
                            '<div class="small-3 columns top-date1">' + $scope.nepali_month_year +'</div>' +
                            '<div class="small-3 push-1 columns top-date2">' + $scope.english_month_year +'</div>' +
                            '</script>' +
                          '</div>' +
                           ' <li>' +
                              '<div class="row">' +
                                '<span class="nep-month small-12 columns">Sunday</span>' +
                             ' </div>' +
                              '<div class="row">' +
                                '<span class="eng-month small-12 columns">आइतबार</span>' +
                              '</div>' +
                            '</li>' +
                            '<li>' +
                              '<div class="row">' +
                                '<span class="nep-month small-12 columns">Monday</span>' +
                              '</div>' +
                              '<div class="row">' +
                                '<span class="eng-month small-12 columns">सोमबार</span>' +
                             '</div>' +
                            '</li>' +
                            '<li>' +
                              '<div class="row">' +
                                '<span class="nep-month small-12 columns">Tuesday</span>' +
                              '</div>' +
                              '<div class="row">' +
                                '<span class="eng-month small-12 columns">मँगलबार</span>' +
                              '</div>' +
                            '</li>' +
                            '<li>' +
                              '<div class="row">' +
                                '<span class="nep-month small-12 columns">Wednesday</span>' +
                              '</div>' +
                              '<div class="row ">' +
                                '<span class="eng-month small-12 columns">बुधबार</span>' +
                              '</div>' +
                            '</li>' +
                            '<li>' +
                              '<div class="row">' +
                                '<span class="nep-month small-12 columns">Thursday</span>' +
                              '</div>' +
                              '<div class="row">' +
                                '<span class="eng-month small-12 columns">बिहीबार</span>' +
                              '</div>' +
                            '</li>' +
                            '<li>' +
                              '<div class="row">' +
                                '<span class="nep-month small-12 columns">Friday</span>' +
                              '</div>' +
                              '<div class="row">' +
                                '<span class="eng-month small-12 columns">शुक्रबार</span>' +
                              '</div>' +
                            '</li>' +
                            '<li>' +
                              '<div class="row">' +
                                '<span class="nep-month small-12 columns">Saturday</span>' +
                              '</div>' +
                              '<div class="row">' +
                                '<span class="eng-month small-12 columns">शनिबार</span>' +
                              '</div>' +
                            '</li> ' +                
                          '</ul>' +
                        '</div>';

            if (date != 0 && totaldays != 0 && month != 0) {
              for (var i = 1; i <= 6; i++) {
                for (var j = 1; j <= 7; ) {
                    if ( ft == 0 ) {
                      htmlelem += '<div class="row">' +
                                '<div class="small-9 small-centered columns">' +
                                '<div class="row">' +
                                '<ul class="day-label-top small-block-grid-7">';
                      for (var k = 1; k < date; k++) {
                        htmlelem += '<li>' + 
                                    '<div class="row">' + 
                                    '<span class="nep-font small-12 columns">&nbsp;</span></div>' +
                                    '<div class="row">' +
                                    '<span class="eng-font small-12 columns">&nbsp;</span></div>' +
                                    '<div class="row">' +
                                    '<span class="small-12 columns" id="date-label">&nbsp;</span></div>' +
                                    '<div id="border-down"></div>' +
                                    '</li>';
                        j++;
                      }
                      ft = 1;
                    }
                    if (day <= totaldays) {
                        if (j % 7 == 0 ) {
                          htmlelem += '<li class="holiday">' +
                                      '<div class="row">' +
                                      '<span class="nep-font small-12 columns">' + nepDigit[day] + '</span></div>' +
                                      '<div class="row">' +
                                      '<span class="eng-font small-12 columns">' + getCorresEngDay(day) + '</span></div>' +
                                      '<div class="row">' +
                                      '<span class="small-12 columns" id="date-label">एकादशी</span></div>' +
                                      '<div id="border-down"></div>' +
                                      '</li>';
                          day++;
                        } else {
                          htmlelem += '<li>' +
                                      '<div class="row">' +
                                      '<span class="nep-font small-12 columns">' + nepDigit[day] + '</span></div>' +
                                      '<div class="row">' +
                                      '<span class="eng-font small-12 columns">' + getCorresEngDay(day) + '</span></div>' +
                                      '<div class="row">' +
                                      '<span class="small-12 columns" id="date-label">एकादशी</span></div>' +
                                      '<div id="border-down"></div>' +
                                      '</li>';
                          day++;
                        }
                      }
                      j++;
                    }
                  }
                }
                htmlelem += '</ul>';
                htmlelem += '</div>';
                $element.html(htmlelem);   
          }

          $scope.BStoAD_button = 0;
        }, true);

        // check if BS to AD button is pressed
        $scope.$watch('ADtoBS_button', function(newval, oldval) { 

          // get all variables
          var selmonth = $scope.selectedEngMonth;
          var seldate = $scope.selectedEngDate;
          var selyear = $scope.selectedEngYear;

          // convert to AD
          if (typeof selyear === 'undefined' || typeof selmonth  === 'undefined' || typeof selyear  === 'undefined' ) {
          } else {
            
            var temp_main = new Object();
            temp_main = engtonep.DateConversion(seldate,selmonth,selyear);
          
            var main = new Object();
            main = neptoeng.DateConversion(temp_main.getDate(),temp_main.getMonth() ,temp_main.getYear());

            // get AD parameters
            var month = parseInt(main.getMonth(), 10);
            var year = parseInt(main.getYear(), 10);
            var totaldays = parseInt(main.getTotalDays(), 10);
            var day = 1;
            var date = parseInt(main.getDayOW(), 10);
            var ft = 0;   // for initial blank blocks
            var htmlelem =  '<div class="row">' +
                            '<ul class="day-container small-block-grid-7">' +
                            '<div class="month-wrapper row">' +
                            '<div class="small-3 columns top-date1">' + $scope.nepali_month_year +'</div>' +
                            '<div class="small-3 push-1 columns top-date2">' + $scope.english_month_year +'</div>' +
                            '</script>' +
                          '</div>' +
                           ' <li>' +
                              '<div class="row">' +
                                '<span class="nep-month small-12 columns">Sunday</span>' +
                             ' </div>' +
                              '<div class="row">' +
                                '<span class="eng-month small-12 columns">आइतबार</span>' +
                              '</div>' +
                            '</li>' +
                            '<li>' +
                              '<div class="row">' +
                                '<span class="nep-month small-12 columns">Monday</span>' +
                              '</div>' +
                              '<div class="row">' +
                                '<span class="eng-month small-12 columns">सोमबार</span>' +
                             '</div>' +
                            '</li>' +
                            '<li>' +
                              '<div class="row">' +
                                '<span class="nep-month small-12 columns">Tuesday</span>' +
                              '</div>' +
                              '<div class="row">' +
                                '<span class="eng-month small-12 columns">मँगलबार</span>' +
                              '</div>' +
                            '</li>' +
                            '<li>' +
                              '<div class="row">' +
                                '<span class="nep-month small-12 columns">Wednesday</span>' +
                              '</div>' +
                              '<div class="row ">' +
                                '<span class="eng-month small-12 columns">बुधबार</span>' +
                              '</div>' +
                            '</li>' +
                            '<li>' +
                              '<div class="row">' +
                                '<span class="nep-month small-12 columns">Thursday</span>' +
                              '</div>' +
                              '<div class="row">' +
                                '<span class="eng-month small-12 columns">बिहीबार</span>' +
                              '</div>' +
                            '</li>' +
                            '<li>' +
                              '<div class="row">' +
                                '<span class="nep-month small-12 columns">Friday</span>' +
                              '</div>' +
                              '<div class="row">' +
                                '<span class="eng-month small-12 columns">शुक्रबार</span>' +
                              '</div>' +
                            '</li>' +
                            '<li>' +
                              '<div class="row">' +
                                '<span class="nep-month small-12 columns">Saturday</span>' +
                              '</div>' +
                              '<div class="row">' +
                                '<span class="eng-month small-12 columns">शनिबार</span>' +
                              '</div>' +
                            '</li> ' +                
                          '</ul>' +
                        '</div>';

            if (date != 0 && totaldays != 0 && month != 0) {
              for (var i = 1; i <= 6; i++) {
                for (var j = 1; j <= 7; ) {
                    if ( ft == 0 ) {
                      htmlelem += '<div class="row">' +
                                '<div class="small-9 small-centered columns">' +
                                '<div class="row">' +
                                '<ul class="day-label-top small-block-grid-7">';
                      for (var k = 1; k < date; k++) {
                        htmlelem += '<li>' + 
                                    '<div class="row">' + 
                                    '<span class="nep-font small-12 columns">&nbsp;</span></div>' +
                                    '<div class="row">' +
                                    '<span class="eng-font small-12 columns">&nbsp;</span></div>' +
                                    '<div class="row">' +
                                    '<span class="small-12 columns" id="date-label">&nbsp;</span></div>' +
                                    '<div id="border-down"></div>' +
                                    '</li>';
                        j++;
                      }
                      ft = 1;
                    }
                    if (day <= totaldays) {
                        if (j % 7 == 0 ) {
                          htmlelem += '<li class="holiday">' +
                                      '<div class="row">' +
                                      '<span class="nep-font small-12 columns">' + nepDigit[day] + '</span></div>' +
                                      '<div class="row">' +
                                      '<span class="eng-font small-12 columns">' + getCorresEngDay(day) + '</span></div>' +
                                      '<div class="row">' +
                                      '<span class="small-12 columns" id="date-label">एकादशी</span></div>' +
                                      '<div id="border-down"></div>' +
                                      '</li>';
                          day++;
                        } else {
                          htmlelem += '<li>' +
                                      '<div class="row">' +
                                      '<span class="nep-font small-12 columns">' + nepDigit[day] + '</span></div>' +
                                      '<div class="row">' +
                                      '<span class="eng-font small-12 columns">' + getCorresEngDay(day) + '</span></div>' +
                                      '<div class="row">' +
                                      '<span class="small-12 columns" id="date-label">एकादशी</span></div>' +
                                      '<div id="border-down"></div>' +
                                      '</li>';
                          day++;
                        }
                      }
                      j++;
                    }
                  }
                }
                htmlelem += '</ul>';
                htmlelem += '</div>';
                $element.html(htmlelem);   
          }

          $scope.ADtoBS_button = 0;
        }, true);

      }
    }
  });