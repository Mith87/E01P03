
angular.module('search', ['mymovie'])
    .controller('SearchController', [ 'myMovieSvc', function(myMovieSvc) {

        this.id = 0;
        this.title = '';
        this.limit = 20;
        var html = '';
        this.movies;
        this.fetch = function() {
            myMovieSvc.fetchByTitle(this.title, this.limit, function(data){
                this.movies = data.movies;
                document.getElementById("iSearch").value = this.movies[0].id;
                angular.forEach(data.movies, function(movie){
                    html += '<tr>';
                    html += '<td>' + movie.id +'</td>';
                    html += '<td>' + movie.title +'</td>';
                    html += '<td>' + movie.year +'</td>';
                    html += '</tr>';
                });
            });
            debugger;
            if(html != ''){
                document.getElementById("tableTest").innerHTML = html;
            }
        }

        this.rowClass = function(movie){
            debugger;
            return movie.id;
        };
    }]);