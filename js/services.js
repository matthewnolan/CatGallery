'use strict';

/* Services */

var appServices = angular.module('appServices', []);

appServices.factory('PhotoService', ['$rootScope',
  function ($rootScope) {
    var photos = [
      {src: 'http://placekitten.com/500/350', desc: 'Mr Whiskers'},
      {src: 'http://placekitten.com/501/350', desc: 'Fluffy'},
      {src: 'http://placekitten.com/502/350', desc: 'Einstein'},
      {src: 'http://placekitten.com/503/350', desc: 'Mittens'},
      {src: 'http://placekitten.com/g/500/350', desc: 'Deadmau5'},        
      {src: 'http://placekitten.com/504/350', desc: 'Sammie'},
      {src: 'http://placekitten.com/505/350', desc: 'Pikachu'},            
      {src: 'http://placekitten.com/g/503/350', desc: 'Tegan'},      
      {src: 'http://placekitten.com/500/350', desc: 'Noodles'},
      {src: 'http://placekitten.com/501/350', desc: 'Menlo'},
      {src: 'http://placekitten.com/502/350', desc: 'Nole'},
      {src: 'http://placekitten.com/503/350', desc: 'Mittens'},
      {src: 'http://placekitten.com/g/500/350', desc: 'Castro'},        
      {src: 'http://placekitten.com/504/350', desc: 'Mr Cuddle Face'},
      {src: 'http://placekitten.com/505/350', desc: 'Pikachu'},            
      {src: 'http://placekitten.com/g/503/350', desc: 'Tegan'},
    ];
    return photos;
}]);

appServices.factory('EffectService', ['$rootScope',
  function ($rootScope) {
    var nameDef = "fade"; //default effect name
    return {
        effects: [
          {name: 'Smooth Fade', className: 'fade'},
          {name: 'Slide Right', className: 'slider'},
          {name: 'Zoom Back', className: 'zoomback'},
          {name: 'Zoom In', className: 'zoomin'},
          {name: 'Super Zoom', className: 'flip'}
        ],
      setDefault: function (name) {
        if (name) nameDef = name;
        $rootScope.$broadcast('routeTransition');
        return nameDef;
      },

    }

}]);
