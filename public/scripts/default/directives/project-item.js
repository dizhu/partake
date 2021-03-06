var fs = require('fs');
var angular = require('angular');

angular.module('defaultApp.directive').directive('projectItem', function($state) {
 return {
    restrict: 'E',
    replace: true,
    scope : {project: '=project'},
    template: fs.readFileSync(__dirname + '/../../../templates/default/partials/project-item.html', 'utf8'),
    link: function (scope, element) {
      element.on('click', function () {
        $state.go('slide.project.details', {id: scope.project.id});
      });

      element.find('.title a').on('click', function (e) {
        e.stopPropagation();
      });
    }
  };
});
