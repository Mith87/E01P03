
angular.module('search', ['mymovie'])
    .controller('SearchController', [ 'myMovieSvc', function(myMovieSvc) {

        this.id = 0;
        this.title = '';
        this.limit = 20;
        this.movies;

        this.fetch = function() {
            myMovieSvc.fetchByTitle(this.title, this.limit, function(data){
                this.movies = data.movies;
                window.alert(this.movies);
            });
        }
    }]);



