'use strict'

angular.module('Calendarapp.directives', [])
  .directive('nepCalendar', function() {
    return {
      restrict: 'E',
      replace: true,
      link: function($scope, $element, $attrs)
      {

        /*

        // check if BS to AD button is pressed
        $scope.$watch('BStoAD_button', function(newval, oldval) { 

          // get all variables
          $scope.selmonth = $scope.selectedNepMonth;
          $scope.seldate = $scope.selectedNepDate;
          $scope.selyear = $scope.selectedNepYear;

          // convert to AD
          if (typeof $scope.selyear === 'undefined' || typeof $scope.selmonth  === 'undefined' || typeof $scope.selyear  === 'undefined' ) {
                     
          } else { 
            var main = new Object();
            main = neptoeng.DateConversion($scope.seldate,$scope.selmonth,$scope.selyear);

            // get AD parameters
            $scope.convmonth = parseInt(main.getMonth(), 10);
            $scope.convyear = parseInt(main.getYear(), 10);
            var totaldays = parseInt(main.getTotalDays(), 10);
            var day = 1;
            $scope.convdate = parseInt(main.getDayOW(), 10);
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

            if ($scope.convdate != 0 && totaldays != 0 && $scope.convmonth != 0) {
              for (var i = 1; i <= 6; i++) {
                for (var j = 1; j <= 7; ) {
                    if ( ft == 0 ) {
                      htmlelem += '<div class="row">' +
                                '<div class="small-9 small-centered columns">' +
                                '<div class="row">' +
                                '<ul class="day-label-top small-block-grid-7">';
                      for (var k = 1; k < $scope.convdate; k++) {
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

*/
        // check if BS to AD button is pressed
        $scope.$watch('ADtoBS_button', function(newval, oldval) { 

          // get all variables
          $scope.selmonth = $scope.selectedEngMonth;
          $scope.seldate = $scope.selectedEngDate;
          $scope.selyear = $scope.selectedEngYear;

          // convert to AD
          if (typeof $scope.selyear === 'undefined' || typeof $scope.selmonth  === 'undefined' || typeof $scope.selyear  === 'undefined' ) {
            var today = new Date();
            /*
            $scope.selyear = today.getFullYear();
            $scope.selmonth = today.getMonth()+1;
            $scope.seldate = today.getDate();
            */
            $scope.selyear = 2013;
            $scope.selmonth = 5;
            $scope.seldate = 18;
            
          }
          console.log($scope.selyear +  ' ' + $scope.selmonth +  ' '+$scope.seldate);

            var main = new Object();
            main = engtonep.DateConversion($scope.seldate,$scope.selmonth,$scope.selyear);
            // get AD parameters
            $scope.convmonth = parseInt(main.getMonth(), 10);
            $scope.convyear = parseInt(main.getYear(), 10);
            var totaldays = parseInt(main.getTotalDays(), 10);
            var day = 1;
            var dayOW = parseInt(main.getDay(), 10);
            $scope.convdate = parseInt(main.getDate(), 10);
            var ft = 0;   // for initial blank blocks
          console.log($scope.convyear +  ' ' + $scope.convmonth + ' '+ $scope.convdate +  ' ' + dayOW);

            $scope.english_month_year = nepengMonth[$scope.convmonth];
            $scope.nepali_month_year = changeTonep($scope.convmonth, String($scope.convyear)); 

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
                          '</ul>' ;

            if ($scope.convdate != 0 && totaldays != 0 && $scope.convmonth != 0) {
              for (var i = 1; i <= 6; i++) {
                for (var j = 1; j <= 7; ) {
                    if ( ft == 0 ) {
                      htmlelem += '<div class="row">' +
                                '<div class="small-9 small-centered columns">' +
                                '<div class="row">' +
                                '<ul class="day-label-top small-block-grid-7">';
                      for (var k = 0; k <= dayOW; k++) {
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
          

          $scope.ADtoBS_button = 0;
        }, true);

      }
    }
  });