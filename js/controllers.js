/* Controllers */

angular.module('Calendarapp.controllers',[])
  .controller('nepaliCalendarCtrl', function($scope, $element) {
  
  // initial button status     
  $scope.navig_button = 0;
  $scope.navig_change = 0;

  // left button click
  $scope.decMonth = function() { 
    if ( $scope.selmonth == 12 ) {
      $scope.selmonth = 1;
      $scope.selyear += 1;
    } else 
      $scope.selmonth -= 1;    

    // trigger change to calendar
    $scope.navig_change = 1;
    $scope.navig_button = 1;
  };

  // right button click
  $scope.incMonth = function() { 
    if ( $scope.selmonth == 12 ) {
      $scope.selmonth = 1;
      $scope.selyear += 1;
    } else 
      $scope.selmonth += 1;
    
    // trigger change to calendar
    $scope.navig_change = 1;
    $scope.navig_button = 1;
  };

  // set today's date
  $scope.findTodayDate = function()
  {
    if ($scope.navig_change == 0) {
      var today = new Date();
      $scope.selyear = today.getFullYear();
      $scope.selmonth = today.getMonth()+1;
      $scope.seldate = today.getDate();
    }
  }

  $scope.setTodayDate = function() 
  {
    if ($scope.navig_change == 0) {
      $scope.todaydate = $scope.convdate;
      $scope.todaymonth = $scope.convmonth;
      $scope.todayyear = $scope.convyear;
    }
  }

  /* for version 2
  $scope.ADtoBS = function() {
    $scope.ADtoBS_button = 1;
  };

  $scope.BStoAD = function() {
    $scope.english_month_year = nepengMonth[$scope.selectedNepMonth] + $scope.selectedNepYear;
    $scope.nepali_month_year = changeTonep($scope.selectedNepMonth, String($scope.selectedNepYear));
    $scope.BStoAD_button = 1;
  };
  */

});
