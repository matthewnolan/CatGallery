'use strict';

/* Directives */

var appDirectives = angular.module('appDirectives', []);

appDirectives.directive('appVersion', ['version',
  function (version) {
    return function (scope, elm, attrs) {
      elm.text(version);
    };
}]);

appDirectives.directive('ngTap', function () {
  return function (scope, element, attrs) {
    var tapping;
    tapping = false;
    element.bind('touchstart', function (e) {
      element.addClass('active');
      tapping = true;
    });
    element.bind('touchmove', function (e) {
      element.removeClass('active');
      tapping = false;
    });
    element.bind('touchend', function (e) {
      element.removeClass('active');
      if (tapping) {
        scope.$apply(attrs['ngTap'], element);
      }
    });
  };
});

//Putting the image in the background of the div to take advantage of browser native scaling with background-size
appDirectives.directive('backImg', function () {
  return function (scope, element, attrs) {
    var url = attrs.backImg;
    element.css({
      'background-image': 'url(' + url + ')'
    });
  };
});

appDirectives.directive('routeTransition', function () {
  return {
    restrict: 'A',
    scope: true,
    link: function (scope, el, attrs) {
      scope.$on('$routeChangeStart', function () {
        el.addClass('routeTransition-out-' + scope.effect);
        el.removeClass('routeTransition-set-' + scope.effect);
      });
      scope.$on('$routeChangeSuccess', function () {
        el.addClass('routeTransition-set-' + scope.effect);
        el.removeClass('routeTransition-out-' + scope.effect);
      });
    }
  };
});