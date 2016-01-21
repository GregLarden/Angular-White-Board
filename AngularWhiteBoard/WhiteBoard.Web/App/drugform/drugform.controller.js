(function () {
    'use strict';

    angular
        .module('app.drugform')
        .controller('DrugFormController', DrugFormController);

    DrugFormController.$inject = ['$q', '$scope','DFDataService'];

    function DrugFormController($q,$scope,DFDataService) {
        var vm = this;
        vm.title = 'Drug Form Title';
       
        vm.addDrugForm = addDrugForm;
        vm.removeDrugForm = removeDrugForm;
        
        vm.drugFormList = [];
        vm.selectedDrugForm = {};
        vm.selectedDrugForms = [];
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


        function addDrugForm(selectedItem, entityTypeName) {
            var foundIndex = -1;
            

            vm.drugFormList.forEach(function (i) {
                if (i.id == selectedItem.id) {
                    foundIndex = vm.drugFormList.indexOf(i);
                }
            }, foundIndex);

           
        };

        function removeDrugForm(selectedItem, entityTypeName) {
            var foundIndex = -1;
            var drugFormToDelete;

          

            vm.drugFormList.forEach(function (i) {
                if (i.id == selectedItem.id) {
                    foundIndex = vm.drugFormList.indexOf(i);
                    drugFormToDelete = vm.drugFormList.splice(foundIndex,i);                    
                }
            });
        }


        
    }
})();