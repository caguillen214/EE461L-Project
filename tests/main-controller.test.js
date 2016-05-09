
describe('MainController', function() {
    beforeEach(function() {
        module('mdMaker');
        module('atMain');
    });
    var $controller;
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('Function: showFunc', function() {
        var $scope, controller;
        beforeEach(function() {
            $scope = {};
            controller = $controller('MainController', {$scope: $scope});
        });
        it('true -> false', function() {
            $scope.showImage = true;
            $scope.showFunc();
            expect($scope.showImage).toEqual(false);
        });

        it('false  -> true', function() {
            $scope.showImage = false;
            $scope.showFunc();
            expect($scope.showImage).toEqual(true);
        });
    });

    describe('Function: titleCase', function() {
        var $scope, controller;
        beforeEach(function() {
            $scope = {};
            controller = $controller('MainController', {$scope: $scope});
        });
        it('first letter lowercase', function() {
            var testString = "hello world!";
            expect($scope.titleCase(testString)).toEqual("Hello world!");
        });
        it('first letter uppercase', function() {
            var testString = "Hello world!";
            expect($scope.titleCase(testString)).toEqual(testString);
        });
    });

    describe('Function: setFileName', function() {
        var $scope, controller;
        beforeEach(function() {
            $scope = {};
            controller = $controller('MainController', {$scope: $scope});
        });
        it('test if $scope.filename is set', function() {
            $scope.setFileName("test", "hello world!");
            expect($scope.fileName).toEqual("hello world!");
        });
    });
});
