(function () {
    'use strict';
    //Usage:
    //<div data-dc-lookup-dropdown
    //     title="Units:"
    //     items="vm.units"
    //     selected-item="vm.selectedUnit"
    //     selected-items="vm.selectedUnits">
    //</div>
    angular.module('app.drugform').directive('dcLookupDropdown', dcLookupDropdown);

    function dcLookupDropdown() {   
        var directive = {
           
             scope: {
                "title": "@"
                , "items": "="
                , "actions": "="
                , "selectedItem": "="
                , "selectedItems": "="
                , "addedItem": "&addedItem"
                , "removedItem": "&removedItem"
                , "entityTypeName": "@"
                , "isDisabled": "="

            }
            , controller: LookupDropDownController
            ,bindToController: true
            ,controllerAs: 'lu'
            , restrict: 'A'
            , replace: true
            , templateUrl: 'app/drugform/directives/dc-lookupDropDown.directive.html'
        };

        
        LookupDropDownController.$inject = ['$scope'];
        function LookupDropDownController($scope) {
            var vm = this;
          //  vm.selectedAction = vm.actions[0];
            vm.addSelectedItem = addSelectedItem;
            vm.removeSelectedItem = removeSelectedItem;

            vm.addActionToSelectedItem = addActionToSelectedItem;
            vm.removeSelectedActionFromItem = removeSelectedActionFromItem;

            vm.onChange = onChange;
            vm.onActionChange = onActionChange;
            vm.disableAddButton = true;
            vm.disableAddActionButton = true;
            vm.disableSelect = false;
            vm.openActionOptions = openActionOptions;
            vm.isCollapsed = true;
            activate();

            function activate() {
                $scope.$watch("lu.items", function (value) {
                    vm.items.forEach(function (item) {
                        item.isActionPanelCollapsed = true;
                        item.selectedAction = {};
                    });
                });
            }

            function addSelectedItem($event) {
                vm.selectedItems.push(vm.selectedItem);

                vm.selectedItem.actionList = [];
                angular.copy(vm.actions, vm.selectedItem.actionList);

                var func = vm.addedItem();
                func(vm.selectedItem, vm.entityTypeName);

                _disableOption(vm.items, vm.selectedItem);

                //sets dropdown back to nullo object
                vm.selectedItem = vm.items[0];

                vm.disableAddButton = shouldDisableAddButton();                
                vm.disableSelect = shouldDisableSelect();
            }

            function removeSelectedItem(item) {
                vm.selectedItem = item;

                var func = vm.removedItem();
                func(vm.selectedItem, vm.entityTypeName);

                _enableOption(vm.items, item);


                vm.selectedItems.splice(vm.selectedItems.indexOf(vm.selectedItem), 1);

                //sets dropdown back to nullo object
                vm.selectedItem = vm.items[0];
                vm.disableAddButton = shouldDisableAddButton();                
                vm.disableSelect = shouldDisableSelect();

            }

            function addActionToSelectedItem(item,action) {
                item.selectedAction = action;
                item.actions.push(action);

                //var func = vm.addedItem();
                //func(vm.selectedItem, vm.entityTypeName);

                _disableOption(item.actionList, item.selectedAction);

                //sets dropdown back to nullo object
                item.selectedAction = vm.actions[0];


                vm.disableAddActionButton = shouldDisableAddActionButton(item.selectedAction);
                vm.disableSelect = shouldDisableSelect();
            }

            function removeSelectedActionFromItem(item,action) {
                vm.selectedItem = item;
                
                //var func = vm.removedItem();
                //func(vm.selectedItem, vm.entityTypeName);


                vm.selectedItem.actions.splice(vm.selectedItem.actions.indexOf(action), 1);
                _enableOption(item.actionList, action);

                //sets dropdown back to nullo object
                item.selectedAction = vm.actions[0];
                vm.disableAddActionButton = shouldDisableAddActionButton(item.selectedAction);
                vm.disableSelect = shouldDisableSelect();

            }

            function onChange(item) {
                vm.disableAddButton = shouldDisableAddButton();
            }
           
            function onActionChange(action) {
                vm.disableAddActionButton = shouldDisableAddActionButton(action);
            }
           
            function openActionOptions(item) {
                item.isActionPanelCollapsed = !item.isActionPanelCollapsed;

                if (!item.isActionPanelCollapsed) {
                    item.actionList = [];
                    angular.copy(vm.actions, item.actionList);
                    var filteredActionList = _removeSelectedActionsFromList(item.actionList, item.actions);

                    item.actionList = filteredActionList;
                } else {
                    item.actionList = [];
                }
            }

            function shouldDisableAddButton() {
                return (vm.selectedItem.id === 0);
            }

            function shouldDisableAddActionButton(action) {
                return (action && action.id === 0);
            }

            function shouldDisableSelect() {
                return (vm.items.length === 1);
            }

            function _disableOption(itemList, selectedItem) {
                if (selectedItem !== null) {
                    itemList.splice(itemList.indexOf(selectedItem), 1);
                };
            };

            function _enableOption(itemList, selectedItem) {
                if (selectedItem !== null) {
                    itemList.push(selectedItem);
                };
            };

            function _removeSelectedActionsFromList(actionList, selectedActions) {
                var filtered_list = [];

                if (angular.isArray(actionList)) {
                    actionList.forEach(function (action) {
                        var itemMatches = false;
                        for (var i = 0; i < selectedActions.length; i++) {
                            var selectedAction = selectedActions[i];
                            if (action.id == selectedAction.id) {
                                itemMatches = true;
                                break;
                            }
                        }

                        if (!itemMatches) {
                            filtered_list.push(action);
                        }
                    });
                } else {
                    // Let the output be the input untouched
                    filtered_list = actionList;
                }
                return filtered_list;
            }
        }
        return directive;
    };
})();