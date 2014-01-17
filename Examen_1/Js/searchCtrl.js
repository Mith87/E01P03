
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
					html += '<div class="row-fluid">';
						html += '<div class="span2 imgMovie">';
							html += '<img height="150" width="100" src="' + movie.posters.profile + '" class="img-circle" />';
						html += '</div>';
						html += '<div class="span8">';
							html += '<h3>Movie Title: ' + movie.title + '</h3>';
							html += '<h3>Year: ' + movie.year + '</h3>';
						html += '</div>';
						html += '<div class="span2 buttonAddFavorite">';
							html +=	'<div class="btn-group">';
								html +=	'<a class="btn dropdown-toggle btn-primary" data-toggle="dropdown" href="#">Action <span class="icon-cog icon-white"></span><span class="caret"></span></a>';
								html += '<ul class="dropdown-menu">'
										html += '<li><a href="#"><span class="glyphicon glyphicon-star"></span> Add to favorites</a></li>';
										html += '<li><a target="_blank" href='+ movie.links.alternate + '><span class="glyphicon glyphicon-zoom-in"></span> More information</a></li>';
								html += '</ul>';
							html += '</div>';
						html += '</div>';
					html += '</div>';
                });
                if(html != ''){
                    document.getElementById("divContainerMovies").innerHTML = html;
                }
            });
        }

        this.rowClass = function(movie){
            debugger;
            return movie.id;
        };
    }]);