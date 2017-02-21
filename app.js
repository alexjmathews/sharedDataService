var myApp = angular.module("DemoApp", []);

myApp.service('SharedDataService', function () {
     var Product = {
        name: '',
        price: ''
    };
    return Product;
});

myApp.controller("DataController1", ['$scope', 'SharedDataService',
    function ($scope, SharedDataService) {
    $scope.Product = SharedDataService;
 
    }]);
 
myApp.controller("DataController2", ['$scope', 'SharedDataService',
    function ($scope, SharedDataService) {
    $scope.Product = SharedDataService;
 
}]);