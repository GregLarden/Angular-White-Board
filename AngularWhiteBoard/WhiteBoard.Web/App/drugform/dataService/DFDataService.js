
(function () {
    'use strict';
    
    angular
        .module('app.drugform')
        .factory('DFDataService', DFDataService);

    DFDataService.$inject = ['$http'];

    function DFDataService($http) {
        var service = {
            getDrugFormData: getDrugFormData
        };

        return service;

        function getDrugFormData() {
            
            return $http.get('http://localhost/WhiteBoard.API/api/whiteboard/GetDrugForms')
            .then(successCallBack, errorCallBack);

            function successCallBack(result) {
                var drugForms = result.data
                console.log(drugForms);
                return drugForms;
            }

            function errorCallBack(error) {
                console.log(error);
            }
        }

    }
})();