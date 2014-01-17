angular.module('favorite', ['mymovie'])
    .controller('FavoritesController', [ 'myMovieSvc', function(myMovieSvc) {

        this.show = function() {
            var html = '';
            for (var i=0, l=localStorage.length; i<l; i++){
                html = '';
                var key = localStorage.key(i);
                myMovieSvc.fetchById(key,function(data){


                    html += '<div class="row-fluid">';
                        html += '<h3>Id: ' + data.movies[0].id + '</h3>';
                    html += '</div>';
                    html += '<div class="span2 imgMovie">';
                        html += '<img height="150" width="100" src="' + data.movies[0].posters.profile + '" class="img-circle" />';
                    html += '</div>';
                    html += '<div class="span8">';
                        html += '<h3>Year: ' + data.movies[0].year + '</h3>';
                        html += '<h3>Movie Title: ' +  data.movies[0].title + '</h3>';
                    html += '</div>';

                });

                if(html != ''){
                    document.getElementById("mostrarF").innerHTML = html;
                }
            }


        }
    }]);
