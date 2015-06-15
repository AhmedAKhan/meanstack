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
    console.log('this will print the Movie that was revieved');
    console.log(Movie);
     $scope.movies = Movie.getList().$object;
    console.log('/app/scripts/controllers/movies.js: printing the value of the movies that the movies view will have access to ');
    console.log($scope.movies);
 });
