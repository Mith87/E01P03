var key='6xbxza6dw37gt25ue9s6ttjg';
var pagelimit='10';
var year='2013';
var baseURL='http://api.rottentomatoes.com/api/public/v1.0/movies.json';
var finalURL=baseURL+'?'+'apikey='+key+'$q='+year+'$page_limit='+pagelimit+'??callback=JSON_CALLBACK';
var peliculasApp = angular.module('peliculasApp',[]);

peliculasApp.controller('PeliculasListCtrl', funtion ($scope) {
	$http('JSONP', finalURL, post, function(status, response){
		// success
	}, function(status, response){
		// error
	});
	$scope.peliculas=[];

	$http.jsonp(finalURL).success(function(data){
		console.log(data);
	});
});