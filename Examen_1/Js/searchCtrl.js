
angular.module('search', ['mymovie'])
    .controller('SearchController', [ '$scope', 'myMovieSvc', function($scope, myMovieSvc) {
        debugger;
        $scope.id = 0;
        $scope.title = '';
        $scope.limit = 20;
        $scope.movies;
        $scope.fetch = function() {
            myMovieSvc.fetchByTitle(this.title, this.limit, function(data){
                $scope.movies = data.movies;
            });
        }
    }]);