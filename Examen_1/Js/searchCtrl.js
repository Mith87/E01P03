
angular.module('search', ['mymovie'])
    .controller('SearchController', [ 'myMovieSvc', function(myMovieSvc) {

        this.id = 0;
        this.title = '';
        this.limit = 20;
        var html = '';
        this.movies;
        this.fetch = function() {
            myMovieSvc.fetchByTitle(this.title, this.limit, function(data){
                html = '';
                this.movies = data.movies;
                angular.forEach(data.movies, function(movie){
                    html += '<tr>';
                    html += '<td><img height="150" width="100" src="' + movie.posters.profile + '" /></td>';
                    html += '<td>' + movie.title +'</td>';
                    html += '<td>' + movie.year +'</td>';
                    html += '</tr>';
                });
                if(html != ''){
                    document.getElementById("tableTest").innerHTML = html;
                }
            });
        }

        this.rowClass = function(movie){
            debugger;
            return movie.id;
        };
    }]);