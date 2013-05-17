/* Controllers */

angular.module('Calendarapp.controllers',[])
  .controller('nepaliCalendarCtrl', function($scope, $element) {


  // displays english month 
  $scope.english_month_year = nepengMonth[$scope.selectedNepMonth];

  // displays nepali month 
  $scope.nepali_month_year = changeTonep("1", "2070");

  var month = $("#nepmonth :selected").index();  
  var year = $('#nepyear :selected').val();
  var date = $('#nepdate :selected').index();

  if ( date != 0 || year!=0 || month!=0) {
    $scope.month = month;
    $scope.year = year;
    $scope.date = date;
  } else {
    $scope.month = 1;
    $scope.year = 1;
    $scope.date = 2070;
  }

  $scope.changetext = function() {
    $scope.month = $("#nepmonth :selected").index();  
    $scope.year = $('#nepyear :selected').val();
    $scope.date = $('#nepdate :selected').index();
  }

});
