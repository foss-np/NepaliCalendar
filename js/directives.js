'use strict'

angular.module('Calendarapp.directives', [])
  .directive('nepCalendar', function() {
    return {
      restrict: 'E',
      replace: true,
      link: function($scope, $element, $attrs)
      {
        findEvent();
        // check if navig button is pressed
        $scope.$watch('navig_button', function(newval, oldval) { 

          var temp = 1;
          // get current date if no date is defined
          if (typeof $scope.selyear === 'undefined' || typeof $scope.selmonth  === 'undefined' || typeof $scope.selyear  === 'undefined' )
            $scope.findTodayDate();

          // convert date to BS
          var main = new Object();
          main = engtonep.DateConversion($scope.seldate,$scope.selmonth,$scope.selyear);
          
          // get BS parameters
          $scope.convmonth = parseInt(main.getMonth(), 10);
          $scope.convyear = parseInt(main.getYear(), 10);
          $scope.convdate =  parseInt(main.getDate(), 10); 

          $scope.setTodayDate();

          // total days of the month
          var totaldays = parseInt(main.getTotalDays(), 10);
          var day = 1;
          
          // day of week of first date of the month (to generate calendar)
          var dayOW =  neptoeng.DateConversion(1,$scope.convmonth,$scope.convyear).getDay();
          var ft = 0;   // for initial blank blocks

          // parameters at top of the calendar
          $scope.english_month_year = nepengMonth[$scope.convmonth] + ' ' + $scope.selyear;
          $scope.nepali_month_year = changeTonep($scope.convmonth, String($scope.convyear)); 

          // html that wraps top containers - name of months and days block
          var htmlelem =  '<div class="main-wrapper">' +
                          '<div class="row">' +
                          '<div class="small-12  month-wrapper small-centered columns">' +
                          '<div class="small-5 columns top-date1">' + $scope.nepali_month_year +'</div>' +
                          '<div class="small-6 push-1 columns top-date2">' + $scope.english_month_year +'</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="row calendar-wrapper">' +
                        '<ul class="day-container small-block-grid-7 small-12 small-centered columns">' +
                         ' <li class="leftborder">' +
                            '<div class="row month-container">' +
                              '<span class="nep-month small-12 columns">Sun</span>' +
                           ' </div>' +

                            '<div class="row">' +
                              '<span class="eng-month small-12 columns">आइ</span>' +
                            '</div>' +
                            '<div id="top-border-down"></div>' +
                          '</li>' +
                          '<li>' +
                            '<div class="row">' +
                              '<span class="nep-month small-12 columns">Mon</span>' +
                            '</div>' +
                            '<div class="row">' +
                              '<span class="eng-month small-12 columns">सोम</span>' +
                           '</div>' +
                            '<div id="top-border-down"></div>' +
                          '</li>' +
                          '<li>' +
                            '<div class="row">' +
                              '<span class="nep-month small-12 columns">Tue</span>' +
                            '</div>' +
                            '<div class="row">' +
                              '<span class="eng-month small-12 columns">मँगल</span>' +
                            '</div>' +
                            '<div id="top-border-down"></div>' +
                          '</li>' +
                          '<li>' +
                            '<div class="row">' +
                              '<span class="nep-month small-12 columns">Wed</span>' +
                            '</div>' +
                            '<div class="row ">' +
                              '<span class="eng-month small-12 columns">बुध</span>' +
                            '</div>' +
                            '<div id="top-border-down"></div>' +
                          '</li>' +
                          '<li>' +
                            '<div class="row">' +
                              '<span class="nep-month small-12 columns">Thurs</span>' +
                            '</div>' +
                            '<div class="row">' +
                              '<span class="eng-month small-12 columns">बिही</span>' +
                            '</div>' +
                            '<div id="top-border-down"></div>' +
                          '</li>' +
                          '<li>' +
                            '<div class="row">' +
                              '<span class="nep-month small-12 columns">Fri</span>' +
                            '</div>' +
                            '<div class="row">' +
                              '<span class="eng-month small-12 columns">शुक्र</span>' +
                            '</div>' +
                            '<div id="top-border-down"></div>' +
                          '</li>' +
                          '<li>' +
                            '<div class="row">' +
                              '<span class="nep-month small-12 columns">Sat</span>' +
                            '</div>' +
                            '<div class="row">' +
                              '<span class="eng-month small-12 columns">शनि</span>' +
                            '</div>' +
                            '<div id="top-border-down"></div>' +
                          '</li> ' +                
                        '</ul>' +
                      '</div>';

          // generate calendar
          if ($scope.convdate != 0 && totaldays != 0 && $scope.convmonth != 0) {
            for (var i = 1; i <= 6; i++) {
              for (var j = 1; j <= 7; ) {
                  if ( ft == 0 ) {
                    htmlelem += '<div class="row">' +  
                              '<ul class="day-label-top small-block-grid-7 small-12 small-centered columns">';
                    for (var k = 1; k < dayOW; k++) {
                      if ( k == 1 )
                        htmlelem += '<li class="block leftborder">';
                      else
                        htmlelem += '<li class="block">';

                        htmlelem += '<div class="row">' + 
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
                        if( day == $scope.todaydate && $scope.convmonth ==  $scope.todaymonth && $scope.convyear == $scope.todayyear) 
                          htmlelem += '<li class="holiday this">';
                        else
                          htmlelem += '<li class="holiday">';

                          htmlelem += '<div class="row">' +
                                      '<span class="nep-font small-12 columns">' + nepDigit[day] + '</span></div>' +
                                      '<div class="row">' +
                                      '<span class="eng-font small-12 columns">' + neptoeng.DateConversion(day, $scope.convmonth, $scope.convyear).getDate() + '</span></div>' +
                                      '<div class="row">' +
                                      '<span class="small-12 columns" id="date-label">'+ '1' +'</span></div>' +
                                      '<div id="border-down"></div>' +
                                      '</li>';
                        day++;
                      } else {
                        if (day == $scope.todaydate && $scope.convmonth ==  $scope.todaymonth && $scope.convyear == $scope.todayyear && (j == 1)) 
                          htmlelem += '<li class="this leftborder">';
                        else if (day == $scope.todaydate && $scope.convmonth ==  $scope.todaymonth && $scope.convyear == $scope.todayyear) 
                          htmlelem += '<li class="this">';
                        else if (j == 1)
                            htmlelem += '<li class="leftborder">';
                        else
                            htmlelem += '<li>';

                            htmlelem += '<div class="row">' +
                                      '<span class="nep-font small-12 columns">' + nepDigit[day] + '</span></div>' +
                                      '<div class="row">' +
                                      '<span class="eng-font small-12 columns">' + neptoeng.DateConversion(day, $scope.convmonth, $scope.convyear).getDate() + '</span></div>' +
                                      '<div class="row">' +
                                      '<span class="small-12 columns" id="date-label">'+ '1'+'</span></div>' +
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
              htmlelem += '<div class="footer">'+
                            'Copyright blah blah blah'+
                            '</div>';
                                          htmlelem += '</div>';

              $element.html(htmlelem);   
        
          // set navig_button to default - to trigger when this is pressed again
          $scope.navig_button = 0;
        }, true);
      }
    }
  });