
angular.module('search', ['mymovie'])
    .controller('SearchController', [ 'myMovieSvc', function(myMovieSvc) {

        this.id = 0;
        this.title = 'Gone with the Wind';

        this.fetch = function() {
            myMovieSvc.fetchByTitle(this.title, function(data){
                window.alert(data.total + ' results');
                window.alert(data.movies);
            });
        }
    }]);



