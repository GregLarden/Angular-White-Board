(function () {
    'use strict';

    angular
        .module('app.drugform')
        .controller('DrugFormController', DrugFormController);

    DrugFormController.$inject = ['$q', '$scope','DFDataService','DTOptionsBuilder','DTColumnDefBuilder','DTDefaultOptions','DTColumnBuilder'];

    function DrugFormController($q, $scope, DFDataService, DTOptionsBuilder, DTColumnDefBuilder, DTDefaultOptions, DTColumnBuilder) {
        var vm = this;
        vm.title = 'Drug Form Title';
       
        vm.addDrugForm = addDrugForm;
        vm.removeDrugForm = removeDrugForm;
           
        vm.drugFormList = [];
        vm.actionsList = [];
        vm.selectedDrugForm = {};
        vm.selectedDrugForms = [];
        activate();

        function activate() {
            return _getDrugForms()
                .then(function () {
                return _getDrugFormActions();
            });
        }

        vm.dtOptions = DTOptionsBuilder.fromFnPromise(_getDrugForms())
            .withDOM('lfrti')
            .withScroller()
            .withOption('deferRender', true)
            //// Do not forget to add the scorllY option!!!
            .withOption('scrollY', 150);
            //.withBootstrap()
            

        //vm.dtColumnDefs = [
        //        DTColumnBuilder.newColumn('id', 'Id'),
        //        DTColumnBuilder.newColumn('name', 'Name'),
        //        DTColumnBuilder.newColumn('selected', 'Selected'),
        //        DTColumnBuilder.newColumn('displayOrder', 'DisplayOrder'),
        //];

        vm.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0),
            DTColumnDefBuilder.newColumnDef(1),
            DTColumnDefBuilder.newColumnDef(2),
            DTColumnDefBuilder.newColumnDef(3)
        ];

        //$resource('data.json').query().$promise.then(function (persons) {
        //    vm.persons = persons;
        //});


        function addDrugForm(selectedItem, entityTypeName) {};

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

        function addActionToDrugForm(selectedDrugForm, selectedAction) {
            selectedDrugForm.actions.push(selectedAction);
        }

        function _getDrugForms() {
            
            return DFDataService.getDrugFormData()
            .then(onFullfilled, onRejected);
            function onFullfilled(drugForms) {
                vm.drugFormList = drugForms;
              
            }

            function onRejected(error) {
                console.log(error);
            }
        }

        function _getDrugFormActions() {
            return DFDataService.getDrugFormActions()
            .then(onFullfilled, onRejected);
            function onFullfilled(actions) {
                vm.actionsList = actions;
            }

            function onRejected(error) {
                console.log(error);
            }
        }
        
    }
})();