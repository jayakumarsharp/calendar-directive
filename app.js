var app = angular.module('calendarDemoApp', []);

// your controller and directive code go here

app.controller('calendarDisplayController', ['$scope', '$element', '$log', function($scope, $element, $log) {
  $scope.startDate = new Date();
  $scope.date = new Date();
  $scope.userMonth;
  $scope.userYear;
  

  
  $scope.setDate = function(userMonth, userYear){
    $scope.date.setMonth(userMonth, 1);
    $scope.date.setFullYear(userYear);
  };

  $scope.range = CalendarRange.getMonthlyRange($scope.date);
console.log($scope.range);
}]);

app.directive('calendarDisplay', function() {
  return {
    restrict: 'E',
    templateUrl: 'calendar.html',
    controller: 'calendarDisplayController',
    link: function($scope) {
    }
  }
  
});
app.directive('dateSetter', function() {
  return {
    require: '?^calendarDisplay',
    restrict: 'A',
    controller: 'calendarDisplayController',
    templateUrl: 'setter.html',
    link: function($scope, $element, $attrs, $apply) {
      var mChoice = document.getElementById("month-options-menu");
      $("#month-options-menu").on("click", function() {
          $scope.$apply(function() {
            var clickOption = mChoice.options[mChoice.selectedIndex].value;

            $scope.userMonth = clickOption;
            $scope.setDate($scope.userMonth, $scope.userYear);
            $scope.range = CalendarRange.getMonthlyRange($scope.date);
        });
      });
      
      var yChoice = document.getElementById("year-options-menu");

      $scope.yearArray = [];
      for (i = 1996; i <= 2036; i++) {
        $scope.yearArray.push(i);
      }

      
      $("#year-options-menu").on("click", function() {
  
        $scope.$apply(function() {
          var clickOption = yChoice.options[yChoice.selectedIndex].value;

          $scope.userYear = clickOption;
          $scope.setDate($scope.userMonth, $scope.userYear);
          $scope.range = CalendarRange.getMonthlyRange($scope.date);
          console.log($scope.range);
        });
      });
    }   
  }
});
