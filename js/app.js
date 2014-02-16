'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('mobileGallery', [
  'ngRoute',
  'ngAnimate', 
  'ngTouch',
  'hmTouchevents',

  'appFilters',
  'appServices',
  'appDirectives',
  'appControllers'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/listview.html', controller: 'MainCtrl'});
  $routeProvider.when('/big/?:picIndex', {reloadOnSearch: false, templateUrl: 'partials/modalview.html', controller: 'MainModal'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
