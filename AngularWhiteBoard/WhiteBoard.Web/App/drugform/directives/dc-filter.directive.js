(function () {
    'use strict';
   
    angular.module('app.drugform').directive('dcFilter', dcFilter);

    function dcFilter() {
        var directive = {
           
             scope: true
            , controller: FilterController
            ,bindToController: true
            ,controllerAs: 'f'
            , restrict: 'A'
            , replace: false
            
            , templateUrl: 'app/drugform/directives/dc-filter.directive.html'
        };

        
        FilterController.$inject = ['$scope'];
        function FilterController($scope) {
            var vm = this;
            vm.filterClicked = false;

            $('.dataTables_filter input').attr("placeholder", "enter seach terms here");
            $('.dataTables_filter').css('float', 'none');
            $('.dataTables_filter').css('padding-right', '0px');
            $("#example_filter").detach().prependTo('#header');

            activate();

            function activate() {

            }

        }

        return directive;
    };
})();