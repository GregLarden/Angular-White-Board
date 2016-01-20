(function () {
    'use strict';

    angular
        .module('app.drugform')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [ {
                   state: 'drugform',
                   config: {
                       url: '/',
                       templateUrl: 'app/drugform/drugform.html',
                       controller: 'DrugFormController',
                       controllerAs: 'df',
                       title: 'Drug Form',
                       settings: {
                           nav: 1
                       }
                   }
               }];

    }

})();


