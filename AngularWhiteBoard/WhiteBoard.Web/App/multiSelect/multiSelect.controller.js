(function () {
    'use strict';

    angular
        .module('app.customMultiListSelect')
        .controller('MultiSelectController', MultiSelectController);

    MultiSelectController.$inject = ['$q', '$scope', 'MSDataService'];

    function MultiSelectController($q, $scope, MSDataService) {
        var vm = this;
        vm.title = 'MultiSelect Title';
       
        vm.addSelectedAvailableItems = addSelectedAvailableItems;
        vm.removeSelectedAssignedItems = removeSelectedAssignedItems;
           
        vm.availableItems= [];
        vm.assignedItems = [];

        vm.testObject = {
            name: 'Test Object',
            assignedItems: [
                { id : 1, name : "Item Option 1", displayOrder : 10 }, 
                { id : 2, name : "Item Option 2" , displayOrder : 20 }
            ]};

        activate();

        function activate() {
            return _getAvaliableItems()
                .then(function () {
                
            });
        }

        function addSelectedAvailableItems(items) {
            if(items){
                items.forEach(function(item){
                    vm.testObject.assignedItems.push(item);
                });
            }
        }

        function removeSelectedAssignedItems(items) {
            if (items) {
                items.forEach(function (item) {
                    vm.testObject.assignedItems.splice(vm.testObject.assignedItems.indexOf(item), 1);
                });
            }
        }


        function _getAvaliableItems() {
            
            return MSDataService.getAvailableItemsData()
            .then(onFullfilled, onRejected);
            function onFullfilled(availableItems) {
                vm.availableItems = availableItems;
            }

            function onRejected(error) {
                console.log(error);
            }
        }

        
    }
})();