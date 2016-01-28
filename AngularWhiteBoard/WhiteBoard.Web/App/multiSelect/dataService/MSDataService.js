
(function () {
    'use strict';
      //Sample Data Service
    angular
        .module('app.customMultiListSelect')
        .factory('MSDataService', MSDataService);

    MSDataService.$inject = ['$http'];

    function MSDataService($http) {
        var service = {
            getAvailableItemsData: getAvailableItemsData
        };

        return service;

        function getAvailableItemsData() {
            return $http.get('http://localhost/WhiteBoard.API/api/whiteboard/GetAvailableItemsData')
            .then(successCallBack, errorCallBack);

            function successCallBack(result) {
                var availableItems = result.data                
                return availableItems;
            }

            function errorCallBack(error) {
                console.log(error);
            }
       }
    }

})();