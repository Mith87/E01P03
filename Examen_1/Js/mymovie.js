
angular.module('mymovie', [])
    .factory('myMovieSearch', ['$http', function($http) {

        this.id = 0;
        this.title = 'Gone with the Wind';

        var API_KEY = "6xbxza6dw37gt25ue9s6ttjg";
        var URL_BASE = "http://api.rottentomatoes.com/api/public/v1.0";

        return {
            fetchByTitle: fetchByTitle,
            fetchById: fetchById
        };

        function fetchByTitle(callback){
            debugger;
            var urlRequest = URL_BASE + '/movies.json?apikey=' + API_KEY + '&q=' + title;
            return fetchData(urlRequest, callback);
        };

        function fetchById(callback){
            var urlRequest = URL_BASE + '/movies/'+id+'.json?apikey=' + API_KEY;
            return fetchData(urlRequest, callback);
        };

        function fetchData(urlRequest, callback){
            return $http.jsonp(urlRequest+'&callback=JSON_CALLBACK').success(callback);
        };

    }]);