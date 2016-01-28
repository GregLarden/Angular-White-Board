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
    angular.module('app.customMultiListSelect').directive('multiListSelect', multiListSelect);

    function multiListSelect() {
        var directive = {
             scope: {
                 "title": "@"
                , "availableItemsLabel":"@"
                , "assignedItemsLabel": "@"
                , "availableItems": "="
                , "assignedItems": "="
                , "addItems": "&"
                , "removeItems": "&"
              
            }
            , controller: MultiListSelectController
            , bindToController: true
            , controllerAs: 'ms'
            , restrict: 'A'
            , replace: true
            , templateUrl: 'app/multiSelect/directives/multi-list-select.directive.html'
        };

        
        MultiListSelectController.$inject = ['$scope', '$timeout'];
        function MultiListSelectController($scope, $timeout) {
            var vm = this;            
            vm.selected = {
                availableItems: [],
                assignedItems: []
            };

            vm.availableItemList = [];
            vm.addSelectedAvailableItems = addSelectedAvailableItems;
            vm.removeSelectedAvailableItems = removeSelectedAvailableItems;

            activate();

            function activate() {
                $timeout(function () {
                    vm.availableItemList = vm.availableItems
                    _refreshAvailableItemLists(vm.assignedItems, vm.selected);
                }, 0,true);
            }


            function addSelectedAvailableItems(assignedItems, selected) {
                vm.addItems()(selected.availableItems);
                _refreshAvailableItemLists(assignedItems, selected);
            }

            function removeSelectedAvailableItems(assignedItems, selected) {
                vm.availableItemList = vm.availableItemList.concat(selected.assignedItems);
                vm.removeItems()(selected.assignedItems);
                _refreshAvailableItemLists(assignedItems, selected);
            }

            /* Filters out items in original that are also in toFilter. Compares by reference. */
            function _filterAvailableItems(availableItems, assignedItems) {
                var filtered = [];
                if (assignedItems) {
                    availableItems.forEach(function (availableItem) {
                        var match = false;
                        for (var i = 0; i < assignedItems.length; i++) {
                            var assignedItemToFilter = assignedItems[i];
                            if (assignedItemToFilter.id === availableItem.id) {
                                match = true;
                                break;
                            }
                        }
                        if (!match) {
                            filtered.push(availableItem);
                        }
                    });
                } else {
                    filtered = availableItems;
                }
                return filtered;
            };

            function _refreshAvailableItemLists(assignedItems, selected) {
                
               vm.availableItemList.concat(selected.assignedItems);
               vm.availableItemList = _filterAvailableItems(vm.availableItemList, assignedItems);
                selected.available = [];
                selected.current = [];
            };

            

        }
        return directive;
    };
})();