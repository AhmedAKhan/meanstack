'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope) {
    $scope.movies = [
      {title:"test 1", url:"www.google.com"},
      {title:"test 2", url:"www.youtube.com"},
      {title:"test 3", url:"www.imdb.com"}
    ];
  });
