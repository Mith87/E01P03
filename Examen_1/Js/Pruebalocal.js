/**
 * Created by FPC on 16/01/14.
 */

var YourCtrl = function(parameters) {
    var $scope = parameters.$scope;
    var localStorageService = parameters.localStorageService;
    // To add to local storage
    localStorageService.add('localStorageKey','Add this!');
    // Read that value back
    var value = localStorageService.get('localStorageKey');
    // You can also play with cookies the same way
    localStorageService.cookie.add('localStorageKey','I am a cookie value now');
}
