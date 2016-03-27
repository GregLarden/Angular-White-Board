(function () {
    'use strict';

    angular
        .module('app.customMultiListSelect')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [ {
            state: 'multiSelect',
                   config: {
                       url: '/',
                       templateUrl: 'app/multiSelect/multiSelect.html',
                       controller: 'MultiSelectController',
                       controllerAs: 'vm',
                       title: 'Multi-Select List Box',
                       settings: {
                           nav: 2
                       }
                   }
               }];

    }

})();


