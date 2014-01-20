angular.module ('favorite',['LocalStorageModule'])
    .controller('FavoriteController', ['$scope', 'localStorageService' , function($scope, localStorageSvc){

        $scope.movies;


        $scope.loadFavorites = function(){
            console.log(JSON.stringify(localStorageSvc.get('favorites')));
            $scope.movies = angular.toJson(localStorageSvc.get('favorites'),true);
        };

    }]);




