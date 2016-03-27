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
                       url: '/examples',
                       templateUrl: 'app/examples/examples.html',
                       controller: 'ExamplesController',
                       controllerAs: 'vm',                       
                       title: 'Examples',
                       settings: {
                           nav:3
                       }
                   }
               }
        ];
    }
})();


