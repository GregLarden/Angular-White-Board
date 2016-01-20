(function () {
    'use strict';

    angular
        .module('app.examples')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(),'/');
    }

    function getStates() {
        return [
               {
                   state: 'examples',
                   config: {
                       url: '/',                 
                       templateUrl: 'app/examples/examples.html',
                       controller: 'ExamplesController',
                       controllerAs: 'vm',                       
                       title: 'Examples'
                   }
               }
        ];
    }
    //function config($stateProvider, $urlRouterProvider) {
    //    $stateProvider.state('examples', {
    //        url: '/examples',
    //        templateUrl: 'app/examples/examples.html',
    //        controller: 'ExamplesController',
    //        controllerAs: 'vm'
    //    });
    //}
})();


