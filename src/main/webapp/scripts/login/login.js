(function() {

    angular.module('nodeCodeApp.Login',['ui.router','ngStorage']).config(Config);

    Config.$inject = ['$stateProvider'];

    function Config($stateProvider){
           $stateProvider
        .state('login', {
            url: '/login',
            controller: 'LoginCtrl',
            controllerAs: 'vm',
            authenticate: false
        });
    }

})();