
describe('Directive Test Suite', function() {
    beforeEach(function() {
        module('mdMaker');
        module('atDirectives');
    });
    var $compile, $rootScope;
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));
    describe('at-action directive', function() {
        it('replaces element with form', function() {
            var element = $compile("<at-action></at-action>")($rootScope);
            $rootScope.$digest();
            expect(element.find('button').text()).not.toBeNull();
        });
    });
    describe('at-asset directive', function() {
        it('replaces element with form', function() {
            var element = $compile("<at-asset></at-asset>")($rootScope);
            $rootScope.$digest();
            expect(element.find('button').text()).not.toBeNull();
        });
    });
    describe('at-build directive', function() {
        it('replaces element with form', function() {
            var element = $compile("<at-build></at-build>")($rootScope);
            $rootScope.$digest();
            expect(element.find('button').text()).not.toBeNull();
        });
    });
    // describe('at-input directive', function() {
    //     it('replaces element with form', function() {
    //         var element = $compile("<at-input></at-input>")($rootScope);
    //         $rootScope.$digest();
    //         expect(element.find('button').text()).not.toBeNull();
    //     });
    // });
    // describe('at-navigation directive', function() {
    //     it('replaces element with form', function() {
    //         var element = $compile("<at-navigation></at-navigation>")($rootScope);
    //         $rootScope.$digest();
    //         expect(element.find('button').text()).not.toBeNull();
    //     });
    // });
    // describe('at-output directive', function() {
    //     it('replaces element with form', function() {
    //         var element = $compile("<at-output></at-output>")($rootScope);
    //         $rootScope.$digest();
    //         expect(element.find('button').text()).not.toBeNull();
    //     });
    // });
});