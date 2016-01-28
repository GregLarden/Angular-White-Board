(function () {
    'use strict';
    //Usage:
    //<div data-multi-select-list-box
    //     data-title="My Multi-Select List Box:"
    //     data-assigned-items="vm.assignedItemList"
    //     data-available-items="vm.availableItemList"
    //     data-add-items="vm.addItems"
    //     data-remove-items="vm.removeItems"
    //>
    //</div>
    angular.module('app.multiSelect').directive('multiSelectListBox', multiSelectListBox);

    function multiSelectListBox() {
        var directive = {
             scope: {
                 "title": "@"
                , "availableItemsLabel":"@"
                , "assignedItemsLabel": "@"
                , "availableItems": "="
                , "assignedItems":"="
                , "addItems": "&addItems"
                , "removeItems": "&removeItems"
            }
            , controller: MultiSelectListBoxController
            , bindToController: true
            , controllerAs: 'ms'
            , restrict: 'A'
            , replace: true
            , templateUrl: 'app/multiSelect/directives/multi-select-list-box.directive.html'
        };

        
        MultiSelectListBoxController.$inject = ['$scope'];
        function MultiSelectListBoxController($scope) {
            var vm = this;

            vm.addSelectedAvailableItems = addSelectedAvailableItems;
            vm.removeSelectedAssignedItems = removeSelectedAssignedItems;
            vm.toggle = toggle;
            vm.selected = {
                availableItems: [],
                assignedItems: []
            };

            activate();

            function activate() {
                console.log(vm.assignedItems);
            }

            function toggle(selected) {
                
                selected = [];
            }
           
            function addSelectedAvailableItems(availableItems) {

            }

            function removeSelectedAssignedItems(assignedItems) {

            }

        }
        return directive;
    };
})();