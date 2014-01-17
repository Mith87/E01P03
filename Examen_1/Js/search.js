
angular.module('search', ['mymovie'])
    .controller('SearchController', ['myMovieSearch', function($scope, myMovieSearch) {
        this.data = function fetchByTitle() {
            debugger;
            return myMovieSearch.fetchByTitle(function (data) {
            });
        };

        /*
        myMovieSearch.fetchById(function (data) {
        });
        */
    }]);