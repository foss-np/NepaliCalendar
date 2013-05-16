/* Controllers */

function nepaliCalendarCtrl( $scope ) {
  console.log("main ctrl");

  $scope.month = $("select#nepyear").
  $scope.list1 = [ 
  {text: '1234', done:true},
  {text: '123345', done:false}];

  $scope.generateCalender = new function() {

  }
}; 

function nepaliCalendarCtrl2( $scope ) {
  console.log("main ctrl2");

  $scope.list1 = [ 
  {text: '123434', done:true},
  {text: '12332345', done:false}];
}; 