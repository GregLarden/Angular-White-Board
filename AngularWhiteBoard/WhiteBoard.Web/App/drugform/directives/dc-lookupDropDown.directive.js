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
            controller: ['$scope', lookupDropDownController]
            , scope: {
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
            , restrict: 'A'
            , replace: true
            , templateUrl: 'app/drugform/directives/dc-lookupDropDown.directive.html'
        };

        return directive;

        function lookupDropDownController($scope) {
            var vm = this;
            $scope.addSelectedItem = addSelectedItem;
            $scope.removeSelectedItem = removeSelectedItem;
            $scope.onChange = onChange;
            $scope.disableAddButton = true;
            $scope.disableSelect = false;
            $scope.isCollapsed = true;
            activate();

            function activate() { }

            function addSelectedItem($event) {
                $scope.selectedItems.push($scope.selectedItem);

                var func = $scope.addedItem();
                func($scope.selectedItem, $scope.entityTypeName);

                _disableOption($scope.items, $scope.selectedItem);

                //sets dropdown back to nullo object
                $scope.selectedItem = $scope.items[0];

                $scope.disableAddButton = shouldDisableAddButton();
                $scope.disableSelect = shouldDisableSelect();
            }

            function onChange(item) {
                $scope.disableAddButton = shouldDisableAddButton();
            }

            function shouldDisableAddButton() {
                return ($scope.selectedItem.id === 0);
            }

            function shouldDisableSelect() {
                return ($scope.items.length === 1);
            }

            function removeSelectedItem(item) {
                $scope.selectedItem = item;

                var func = $scope.removedItem();
                func($scope.selectedItem, $scope.entityTypeName);

                _enableOption($scope.items, item);


                $scope.selectedItems.splice($scope.selectedItems.indexOf($scope.selectedItem), 1);

                //sets dropdown back to nullo object
                $scope.selectedItem = $scope.items[0];
                $scope.disableAddButton = shouldDisableAddButton();
                $scope.disableSelect = shouldDisableSelect();

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
        }

    };
})();