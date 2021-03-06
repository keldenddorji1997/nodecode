(function() {

    angular.module('nodeCodeApp.Logout').controller('LogoutCtrl',
            LogoutCtrl);

    LogoutCtrl.$inject = ['$state', '$rootScope', 'dataBeanService','$window','$sessionStorage'];
    function LogoutCtrl($state, $rootScope, dataBeanService,$window,$sessionStorage) {
    	delete $sessionStorage.userId;
    	delete $sessionStorage.token;
    	delete $sessionStorage.roles;
    	$sessionStorage.isAuthenticated = false;
    	dataBeanService.setStatetransitionHasErr('0');
        $window.location.href = 'index.html';
    	//$state.go('login', {}, {reload: true});
    }
})();