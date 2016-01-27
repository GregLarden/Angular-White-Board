
(function () {
    'use strict';
      //Sample Data Service
    angular
        .module('app.drugform')
        .factory('DFDataService', DFDataService);

    DFDataService.$inject = ['$http'];

    function DFDataService($http) {
        var service = {
            getDrugFormData: getDrugFormData,
            getDrugFormActions:getDrugFormActions

        };

        return service;

        function getDrugFormActions(){
            return $http.get('http://localhost/WhiteBoard.API/api/whiteboard/GetDrugFormActions')
            .then(successCallBack, errorCallBack);

            function successCallBack(result) {
                var actions = result.data
                console.log(actions);
                return actions;
            }

            function errorCallBack(error) {
                console.log(error);
            }
        }

        function getDrugFormData() {
            
            return $http.get('http://localhost/WhiteBoard.API/api/whiteboard/GetDrugForms')
            .then(successCallBack, errorCallBack);

            function successCallBack(result) {
                var drugForms = result.data
                

                return drugForms;
            }

            function errorCallBack(error) {
                console.log(error);
            }
        }

    }
})();