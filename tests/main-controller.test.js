/**
 * Created by Ben on 4/29/2016.
 */
describe('MainController', function() {
    beforeEach(function() {
        module('mdMaker');
    });
    var $controller;
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));
    describe('Function: $scope.showFunc', function() {
        beforeEach(function() {
            var $scope = {};
            var controller = $controller('MainController', {$scope: $scope});
        });
        it('true -> false', function() {
            var $scope = {};
            var controller = $controller('MainController', {$scope: $scope});
            $scope.showImage = true;
            $scope.showFunc();
            expect($scope.showImage).toBe(false);
        });

        it('false  -> true', function() {
            var $scope = {};
            var controller = $controller('MainController', {$scope: $scope});
            $scope.showImage = false;
            $scope.showFunc();
            expect($scope.showImage).toBe(true);
        })
    });

});
