'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope, Movie) {
    console.log('Movie.getList().$object:');
    console.log(Movie.getList().$object);

    $scope.movies = Movie.getList().$object;
  });
