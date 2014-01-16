
angular.module('search', ['mymovie'])
    .controller('SearchController', ['myMovieSearch', function($scope, myMovieSearch) {

        this.entries;

        this.id;
        this.title;
        this.year;
        this.yg = ['Disabled','Enabled'];
        this.mt = ['None','Movie', 'TV Series', 'TV Movie', 'Video', 'Video Game'];
        this.plot = ['None','Simple', 'Full'];
        this.episode = ['Enabled','Disabled'];
        this.offset = 0;
        this.limit = [1,2,3,4,5,6,7,8,9,10];
        this.lang = ['en-US','zh-CN'];
        this.aka = ['Simple', 'Full'];
        this.release = ['Simple', 'Full'];
        this.business = ['Disabled','Enabled'];
        this.tech = ['Disabled','Enabled'];

		function fetchByTitle() {
			myMovieSearch.fetchByTitle();
		};
		
        function fetchById() {
			myMovieSearch.fetchById();
		};
		
    }]);