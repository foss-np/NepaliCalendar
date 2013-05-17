/* Controllers */

angular.module('Calendarapp.controllers',[])
  .controller('nepaliCalendarCtrl', function($scope, $element) {

  $scope.ADtoBS = function() {
      $scope.english_month_year = nepengMonth[$scope.selectedEngMonth];
      $scope.nepali_month_year = changeTonep($scope.selectedEngMonth, String($scope.selectedEngYear));
  };

  $scope.BStoAD = function() {
      $scope.english_month_year = nepengMonth[$scope.selectedNepMonth];
      $scope.nepali_month_year = changeTonep($scope.selectedNepMonth, String($scope.selectedNepYear));
  };

});
