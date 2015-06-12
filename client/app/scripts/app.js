'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvidor) {
    RestangularProvidor.setBaseURL('http://localhost:3000);
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('MovieRestangular', function(Restangular){
     return Restangular.withConfig(function(RestangularConfigurer){ 
       RestangularConfigurer.setRestangularFields({
         id:'_id'
       });
     }); 
  })
  .factory('Movie', function(MovieRestangular){
    return MovieRestangular.service('movie');
  })