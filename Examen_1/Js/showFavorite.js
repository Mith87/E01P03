angular.module ('favorite',['localStorageModule'])
    .controller('FavoriteController', ['$scope', 'localStorageService', function($scope, localStorageService){
        $scope.movies = '';

        $scope.loadFavorites = function(){
            $scope.movies = localStorage.getItem('favorites');
        };

    }]);




