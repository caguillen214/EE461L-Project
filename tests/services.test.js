describe('Services Test', function() {
    beforeEach(function() {
        module('mdMaker');
        module('atServerService');
        module('atDirectiveService');
    });
    var atServer, atDirApi, $httpBackend;
    beforeEach(inject(function(_atServer_, _atDirApi_, _$httpBackend_) {
        atServer = _atServer_;
        atDirApi = _atDirApi_;
        $httpBackend = _$httpBackend_;
    }));
    describe('getFileNames', function() {
        it('correct GET', function(){
            //$httpBackend.flush();
            $httpBackend.expectGET("http://localhost:3000/get-file-names?project=example").respond({});
            atServer.getFileNames("example");
            $httpBackend.flush();
        });
    });
    describe('getFileImages', function() {
        it('correct GET', function(){
            //$httpBackend.flush();
            $httpBackend.expectGET("http://localhost:3000/get-file-images?project=example").respond({});
            atServer.getFileImages("example");
            $httpBackend.flush();
        });
    });
});