'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('MainCtrl', ['$scope', '$location', '$rootScope', 'PhotoService', 'EffectService',
  function ($scope, $location, $rootScope, PhotoService, EffectService) {

    $scope._Index = 0;
    
    // set of Photos
    $scope.photos = PhotoService;

    // get effects
    $scope.effects = EffectService.effects;
    $scope.effect = EffectService.setDefault();

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
      return $scope._Index === index;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
      $scope._Index = index;
      $location.path("big/").search("pic", index.toString());
    };

    $scope.toggleClose = function () {
      $location.path("").search("");
    };

    $scope.setEffect = function (effect) {
      EffectService.setDefault(effect);
    }

  }
]);

appControllers.controller('MainModal', ['$scope', '$routeParams', '$route', '$location', 'PhotoService', 'EffectService',
  function ($scope, $routeParams, $route, $location, PhotoService, EffectService) {

    // Set of Photos
    $scope.photos = PhotoService;
    $scope.effects = EffectService;
    $scope.effect = EffectService.setDefault();

    // Get info from the URL
    var url = $location.search();
    if (url.pic) $scope._Index = parseInt(url.pic, 10);
    else $scope._Index = 0;

    // If a current image is the same as requested image
    $scope.isActive = function (index) {
      return $scope._Index === index;     
    };

    // show prev image
    $scope.showPrev = function (index) {
      $scope.direction = 'right';
      $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
      $location.search("pic", $scope._Index)
    };

    // show next image
    $scope.showNext = function (index) {
      $scope.direction = 'left';
      $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
      $location.search("pic", $scope._Index)
    };

    // Closes modal window
    $scope.toggleCustom = function () {
      // $scope.custom = true;   //Sets the default of the toggle
      $scope.custom = $scope.custom === false ? true : false;
    };

  }
]);


appControllers.animation('.slide', function () {
  return {
    addClass: function (element, className, done) {
      var scope = element.scope();

      if (className == 'ng-hide') {
        var finishPoint = element.parent().width();
        if (scope.direction !== 'right') {
          finishPoint = -finishPoint;
        }
        TweenMax.to(element, 0.5, {
          left: finishPoint,
          opacity: 1,
          onComplete: done
        });
      } else {
        done();
      }
    },
    removeClass: function (element, className, done) {
      var scope = element.scope();

      if (className == 'ng-hide') {
        element.removeClass('ng-hide');

        var startPoint = element.parent().width();
        if (scope.direction === 'right') {
          startPoint = -startPoint;
        }

        TweenMax.set(element, {
          left: startPoint,
          opacity: .1,
        });
        TweenMax.to(element, 0.5, {
          opacity: 1,
          left: 0,
          onComplete: done
        });
      } else {
        done();
      }
    }
  };
});