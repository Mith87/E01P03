
angular.module('searchModule', ['myMovieModule', 'LocalStorageModule'])
    .controller('SearchController', [ '$scope', 'myMovieSvc', 'localStorageService', function($scope, myMovieSvc, localStorageService) {
        debugger;
        $scope.id = 0;
        $scope.title = '';
        $scope.limit = 0;
        $scope.movies;

        $scope.fetch = function(limit) {
            myMovieSvc.fetchByTitle($scope.title, limit, function(data){
                $scope.movies = data.movies;
            });
        }

        $scope.fetchTop = function(limit) {
            myMovieSvc.fetchTop('2013', limit, function(data){
                $scope.movies = data.movies;
            });
        }

        $scope.addFavorite = function(movie) {
            window.alert(movie.title);
        }

    }]);

/*
angular.module('favoritesModule', ['LocalStorageModule'])
    .controller('FavoritesController', [ '$scope', 'LocalStorageService', function($scope, LocalStorageService) {

        $scope.movies;



    }]);
*/