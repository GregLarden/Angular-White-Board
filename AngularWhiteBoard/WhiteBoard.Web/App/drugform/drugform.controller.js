(function () {
    'use strict';

    angular
        .module('app.drugform')
        .controller('DrugFormController', DrugFormController);
    DrugFormController.$inject = ['$q', '$scope'];
    function DrugFormController($q,$scope) {
        var vm = this;
        vm.title = 'Drug Form Title';
        

      

    }
})();