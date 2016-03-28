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

        vm.nameFilter = undefined;
        vm.selectedFilter = undefined;

        vm.customFilter = customFilter;
        
        vm.dtInstance = {};
        activate();

       

        function customFilter(){
            console.log('customFilter called: ' + vm.selectedFilterValue);

            if (vm.selectedFilterValue) {
                vm.dtInstance.DataTable.columns(2).search(vm.selectedFilterValue).draw();
            } else {
                vm.dtInstance.DataTable.columns(2).search('').draw();
            }

            if (vm.nameFilter) {
                vm.dtInstance.DataTable.columns(1).search(vm.nameFilter).draw();
            } else {
                vm.dtInstance.DataTable.columns(1).search('').draw();
            }

           
        }

        function activate() {
            return _getDrugForms()
                .then(function () {
                return _getDrugFormActions();
            });
        }

        //vm.dtOptions = DTOptionsBuilder
        //  .newOptions()
        //  .withFnServerData(serverData)
        //  .withDataProp('data')
        //  .withOption('processing', true)
        //  .withOption('serverSide', true)
        //  .withDOM('frti')
        //  .withScroller()
        //  .withOption('searching', false)
        //  .withOption('deferRender', true)
        //  .withOption('scrollY', 200)
        //  .withOption('loadingIndicator', true);
          
         

        //function serverData(sSource, aoData, fnCallback, oSettings) {

        //    //All the parameters you need is in the aoData variable
        //    var draw = aoData[0].value;
        //    var order = aoData[2].value;
        //    var start = aoData[3].value;
        //    var length = aoData[4].value;

        //    var end = start + length
        //    //Then just call your service to get the records from server side
        //    //  filterService.execute(start, length, order).then(function (result) {
        //    _getDrugForms(start, length).then(function (orders) {
        //        var records = {
            //            'draw': draw,

        //            'recordsTotal': 162,
        //            'recordsFiltered': 162,
        //            'data': orders
        //        };
        //        return records;
        //    }).then(function (records) {
        //        vm.drugFormList = records.data;
        //        fnCallback(records);
        //    });
        //}

        //vm.dtColumnDefs = [
        //        DTColumnBuilder.newColumn('id', 'Id'),
        //        DTColumnBuilder.newColumn('name', 'Name'),
        //        DTColumnBuilder.newColumn('selected', 'Selected'),
        //        DTColumnBuilder.newColumn('displayOrder', 'DisplayOrder')
        //];

        vm.dtOptions = DTOptionsBuilder.fromFnPromise(_getDrugForms(0,0))
           .withDOM('lrti')
           .withScroller()
           .withOption('deferRender', true)
           //// Do not forget to add the scorllY option!!!
            
            .withOption('scrollY', 150);
        
        //.withBootstrap()

        vm.dtColumnDefs = [
                  DTColumnDefBuilder.newColumnDef(0),
                  DTColumnDefBuilder.newColumnDef(1),
                  DTColumnDefBuilder.newColumnDef(2),
                  DTColumnDefBuilder.newColumnDef(3)
                   //DTColumnBuilder.newColumn(0).withTitle('Id'),
                   //DTColumnBuilder.newColumn(1).withTitle('Name'),
                   //DTColumnBuilder.newColumn(2).withTitle('Selected'),
                   //DTColumnBuilder.newColumn(3).withTitle('DisplayOrder')
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

        function _getDrugForms(start, length) {
            
            return DFDataService.getDrugFormData(0, 0)
            .then(onFullfilled, onRejected);
            function onFullfilled(drugForms) {
                vm.drugFormList = drugForms;
                console.log('vm.drugFormList: ', vm.drugFormList);
              // return vm.drugFormList;
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