
angular.module('search', ['mymovie'])
    .controller('SearchController', [ 'myMovieSvc', function(myMovieSvc) {
        this.id = 0;
        this.title = 2013;
        this.limit = 20;
        var html = '';
        this.movies;
        this.fetch = function() {
            myMovieSvc.fetchTop(this.title, this.limit, function(data){
                this.movies = data.movies;
                angular.forEach(data.movies, function(movie){
                    html += '<tr>';
                    html += '<td>' + movie.id +'</td>';
                    html += '<td>' + movie.title +'</td>';
                    html += '<td>' + movie.year +'</td>';
                    html += '</tr>';
                    if(html != ''){
                        document.getElementById("tableTest").innerHTML = html;
                    }
                });
            });
        }

        this.rowClass = function(movie){
            debugger;
            return movie.id;
        };
    }]);