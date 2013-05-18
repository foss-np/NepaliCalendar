/* Controllers */

angular.module('Calendarapp.controllers',[])
  .controller('nepaliCalendarCtrl', function($scope, $element) {

  $scope.BStoAD_button = 0;
  $scope.ADtoBS_button = 0;

  $scope.ADtoBS = function() {
    $scope.english_month_year = nepengMonth[$scope.selectedEngMonth];
    $scope.nepali_month_year = changeTonep($scope.selectedEngMonth, String($scope.selectedEngYear));
    $scope.ADtoBS_button = 1;
  };

  $scope.BStoAD = function() {
    $scope.english_month_year = nepengMonth[$scope.selectedNepMonth];
    $scope.nepali_month_year = changeTonep($scope.selectedNepMonth, String($scope.selectedNepYear));
    $scope.BStoAD_button = 1;
  };


});
