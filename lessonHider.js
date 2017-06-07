angular.module('directivePractice').directive('lessonHider', function(){
  return{
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule()
    },
    link: function(scope, element, attributes){
      scope.getSchedule.then(function(response){
        scope.schedule = response.data;
        for(var i = 0; i < scope.schedule.length; i++){
            if(scope.lesson.indexOf(scope.schedule[i].lesson) > -1){
              element.css('text-decoration', 'line-through');
              scope.lessonDay = scope.schedule[i].weekday
          }
        }
      })//end .then function
    }//end link function
  }//end return
});//end directive
