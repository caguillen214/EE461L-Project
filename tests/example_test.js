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
    describe('$scope.showImage', function() {
        it('is false', function() {
            var $scope = {};
            var contoller = $controller('MainController', {$scope: $scope});
            expect($scope.showImage).toBe(false);
        });
    });

});
