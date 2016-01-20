(function () {
    'use strict';

    angular
        .module('app.drugform')
        .controller('DrugFormController', DrugFormController);

    DrugFormController.$inject = ['$q', '$scope','DFDataService'];

    function DrugFormController($q,$scope,DFDataService) {
        var vm = this;
        vm.title = 'Drug Form Title';
        
        vm.drugFormList = [];

        activate();

        function activate() {
            
            var promises = [DFDataService.getDrugFormData()];
            return $q.all(promises)
            .then(onFullfilled, onRejected);
            function onFullfilled(drugForms) {
                vm.drugFormList = drugForms[0];
            }

            function onRejected(error) {
                console.log(error);
            }

        }


        
    }
})();