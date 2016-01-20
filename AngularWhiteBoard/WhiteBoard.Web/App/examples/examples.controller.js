(function () {
    'use strict';

    angular
        .module('app.examples')
        .controller('ExamplesController', ExamplesController);
    ExamplesController.$inject = ['$q', '$scope'];
    function ExamplesController($q, $scope) {
        var vm = this;
        vm.title = 'Examples Title';
    }
})();