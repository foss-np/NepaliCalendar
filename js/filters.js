'use strict'

angular.module('Calendarapp.filters', [])
  .filter('range', function() {
    return function(input) {
      var lowerBound = parseInt(input[0]),
          highBound = parseInt(input[1]);

      var result = [];
      for (var i = lowerBound; i <= highBound; i++)
        result.push(i);

      return result;
    };
  });