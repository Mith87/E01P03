
angular.module('mymovie', [])
    .factory('myMovieSearch', ['$http', function($http) {

        var URL_REQUEST =  'http://mymovieapi.com/?type=jsonp;'+
                           'parameters';

        return {
            fetchByName: fetchByTitle,
            fetchById: fetchById
        };

        function fetchByTitle(){
            URL_REQUEST.replace('parameters',
                'q='+title+';'+
                'year='+year+ ';'+
                'yg='+yg+ ';'+
                'mt='+mt+ ';'+
                'plot='+plot+';'+
                'episode' +episode+ ';'+
                'offset='+offset+ ';'+
                'limit='+limit+ ';'+
                'lang' +lang+ ';'+
                'aka' +aka+ ';'+
                'release' +release+ ';'+
                'business' +business+ ';'+
                'tech' +tech+ ';');

            return fetchData();
        };

        function fetchById(){
            debugger;
            URL_REQUEST.replace('parameters',
                'id='+id+';'+
                'plot='+plot+';'+
                'episode' +episode+ ';'+
                'lang' +lang+ ';'+
                'aka' +aka+ ';'+
                'release' +release+ ';'+
                'business' +business+ ';'+
                'tech' +tech+ ';');

            return fetchData();
        };

        function fetchData(){
            return $http.jsonp(URL_REQUEST).success(function(data) {

            });
        };

    }]);