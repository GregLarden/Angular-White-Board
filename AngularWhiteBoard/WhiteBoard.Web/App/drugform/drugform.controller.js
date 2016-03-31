(function () {
    'use strict';

    angular
        .module('app.drugform')
        .controller('DrugFormController', DrugFormController);

    DrugFormController.$inject = ['$q', '$scope', '$timeout', 'DFDataService', 'DTOptionsBuilder', 'DTColumnDefBuilder', 'DTDefaultOptions', 'DTColumnBuilder'];

    function DrugFormController($q, $scope, $timeout, DFDataService, DTOptionsBuilder, DTColumnDefBuilder, DTDefaultOptions, DTColumnBuilder) {
        var vm = this;
        vm.title = 'Drug Form Title';

        vm.addDrugForm = addDrugForm;
        vm.removeDrugForm = removeDrugForm;

        vm.drugFormList = [];
        vm.actionsList = [];
        vm.selectedDrugForm = {};
        vm.selectedDrugForms = [];
        vm.selectRow = selectRow;
        vm.filterClicked=false;
        activate();

        function activate() {
            return _getDrugForms()
                .then(function () {
                    return _getDrugFormActions();
                });
        }


        vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3)
        ];

        vm.dtInstanceCallback = dtInstanceCallback;
        vm.dtInstance = {};

        //$timeout(function () {
        vm.dtOptions = DTOptionsBuilder.fromFnPromise(_getDrugForms())
            //.withDOM('lfrti')
            .withDOM('rtip')
             .withSelect({
                 style: 'single'
             })
            .withScroller()
            .withOption('deferRender', true)
            //// Do not forget to add the scorllY option!!!
            .withOption('scrollY', 150)
            .withOption('rowId', 'id')
            .withOption('retrieve', true);
             // .withOption('rowCallback', rowCallback);
            //.withBootstrap()
      //  }, 10);
        var previousIndex = undefined;
        var currentIndex = undefined;


        function dtInstanceCallback(dtInstance) {
            vm.dtInstance = dtInstance;
           
            vm.dtInstance.DataTable.on('deselect.dt', function (e, dt, type, indexes) {
                //console.log('deselect.dt: type:' + type + ' - RowId:' + indexes[0]);
                if (type === 'row') {
                    previousIndex = indexes[0];
                   
                    if (previousIndex == currentIndex) {
                        console.log('DESELECT: Previous: ' + previousIndex + ' Current: ' + currentIndex);
                        vm.dtInstance.DataTable.row(':eq(' + previousIndex + ')', { page: 'current' }).select();
                    }
                }
            });

            vm.dtInstance.DataTable.on('select.dt', function (e, dt, type, indexes) {
                if (type === 'row') {
                    currentIndex = indexes[0];
                    if (previousIndex !== currentIndex) {
                       // console.log('SELECT: Previous: ' + previousIndex + ' Current: ' + currentIndex);
                        vm.dtInstance.DataTable.row(':eq(' + previousIndex + ')', { page: 'current' }).deselect();
                        previousIndex == currentIndex;
                    }
                }
            });
        
        }

    



        vm.selectedDrugForm = {};


        function selectRow(drugForm) {
            //if (vm.selectedDrugForm.id === drugForm.id) {
            //    vm.dtInstance.DataTable.rows({ selected: true }).data(drugForm);
            //}

            console.log(vm.dtInstance.DataTable.row({ selected: true }).index());

            vm.selectedDrugForm = drugForm;

            //vm.dtInstance.DataTable.row(0).select();
            //vm.dtInstance.DataTable.row(0).nodes()
            //.to$()
            //.addClass('selected');
        }

        function addDrugForm(selectedItem, entityTypeName) { };

        function removeDrugForm(selectedItem, entityTypeName) {
            var foundIndex = -1;
            var drugFormToDelete;

            vm.drugFormList.forEach(function (i) {
                if (i.id == selectedItem.id) {
                    foundIndex = vm.drugFormList.indexOf(i);
                    drugFormToDelete = vm.drugFormList.splice(foundIndex, i);
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