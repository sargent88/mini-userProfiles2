angular.module('userProfiles').controller('MainController', function($scope, mainService) {
    $scope.getUsers = function() {
        var promise = mainService.getUsers();
        promise.then(function(users) {
            $scope.users = users.data;
        });
    }
    $scope.getUsers();
});