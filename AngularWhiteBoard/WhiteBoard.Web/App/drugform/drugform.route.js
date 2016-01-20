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
                       url: '/drugform',
                       templateUrl: 'app/drugform/drugform.html',
                       controller: 'DrugFormController',
                       controllerAs: 'df',
                       title: 'Drug Form',
                       settings: {
                           nav: 2
                       }
                   }
               }];

    }

    //angular

    //    .module('app.drugform')
    //    .config(config);

    //config.$inject = ['$stateProvider', '$urlRouterProvider'];

    //function config( $stateProvider, $urlRouterProvider) {    
    //    $stateProvider.state('drugform', {
    //        url: '/drugform',
    //        templateUrl: 'app/drugform/drugform.html',
    //        controller: 'DrugFormController',
    //        controllerAs: 'df'
    //    });
    //}

})();


