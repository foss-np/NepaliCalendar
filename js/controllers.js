/* Controllers */

angular.module('Calendarapp.controllers',[])
  .controller('nepaliCalendarCtrl', function($scope, $element) {
  
  /*
  var cal_setup = localStorage.getItem('cal_setup');

  if (cal_setup == null || cal_setup == 0)  
    initialSetup();
  */

  // initial button status     
  $scope.navig_button = 0;
  $scope.navig_change = 0;

  // left button click
  $scope.decMonth = function() { 
    if ( $scope.selmonth == 1 ) {
      $scope.selmonth = 12;
      $scope.selyear -= 1;
    } else {
      $scope.selmonth -= 1;    
    }
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
  $scope.findTodayDate = function() {
    if ($scope.navig_change == 0) {
      var today = new Date();
      $scope.selyear = today.getFullYear();
      $scope.selmonth = today.getMonth()+1;
      $scope.seldate = today.getDate();
    }

  }

  $scope.setTodayDate = function() {
    if ($scope.navig_change == 0) {
      $scope.todaydate = $scope.convdate;
      $scope.todaymonth = $scope.convmonth;
      $scope.todayyear = $scope.convyear;
    }
  }

  $scope.getLabel =  function(day, convmonth, convyear)
  {
    return localStorage.getItem(String(n(day)) + String(n($scope.convmonth)) + String($scope.convyear));   
  }

  $scope.goTo = function()
  {
    if (typeof $scope.selectedGoDate != 'undefined' && typeof $scope.selectedGoMonth  != 'undefined' && typeof $scope.selectedGoYear  != 'undefined') {
        // convert date to AD
        var main = new Object();
        main = neptoeng.DateConversion($scope.selectedGoDate,$scope.selectedGoMonth,$scope.selectedGoYear);
        
        $scope.seldate = main.getDate();
        $scope.selmonth = main.getMonth();
        $scope.selyear = main.getYear();
        $scope.markdate = $scope.selectedGoDate;

        $scope.navig_change = 1;
        $scope.navig_button = 1;
      }  
  }

  $scope.ADtoBS = function()
  {

    if (typeof $scope.selectedEngDate != 'undefined' && typeof $scope.selectedEngMonth  != 'undefined' && typeof $scope.selectedEngYear  != 'undefined') {
        // convert date to AD
        var main = new Object();
        main = engtonep.DateConversion($scope.selectedEngDate,$scope.selectedEngMonth,$scope.selectedEngYear);

        $scope.seldate = $scope.selectedEngDate;
        $scope.selmonth = $scope.selectedEngMonth;
        $scope.selyear = $scope.selectedEngYear;
        $scope.markdate = main.getDate();
        $scope.marknepmonth = main.getMonth();
        $scope.marknepyear = main.getYear();

        $scope.navig_change = 1;
        $scope.navig_button = 1;  
      }
  }

  $scope.BStoAD = function()
  {
    if (typeof $scope.selectedNepDate != 'undefined' && typeof $scope.selectedNepMonth  != 'undefined' && typeof $scope.selectedNepYear  != 'undefined') {
        // convert date to AD
        var main = new Object();
        main = neptoeng.DateConversion($scope.selectedNepDate,$scope.selectedNepMonth,$scope.selectedNepYear);
        
        $scope.seldate = main.getDate();
        $scope.selmonth = main.getMonth();
        $scope.selyear = main.getYear();
        $scope.markdate = $scope.selectedNepDate;

        $scope.navig_change = 1;
        $scope.navig_button = 1;  
      }
  }

/*
  $scope.getItemFromDb = function() {

    // schema
    var result;
    var dbSchema = [{
        name: 'calendar_events',
        key: 'date',
        indexes: [
            { name: 'date', field: 'date', unique: false }
        ]
    }];

    // init
    var IDB = new DB({
        name: 'db_calendar',
        version: 1,
        schema: dbSchema,
        success: function (DBObject) {
            db = DBObject;
            db.get({
                  store: 'calendar_events', 
                  id: 20700101,
                  success: function (data, e) {
                   // console.log(data.date)
                    result = data.date;
                    console.log(result);
                  },
                  error: function (id, e) {
                      console.log('error getting row ' + id);
                  }
              });
              return result;

        },
        error: function (support, e) {
            console.log('error initing db');
        }

    });
    console.log('asd');
                        return result;

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
