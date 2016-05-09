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
            $httpBackend.expectGET("http://104.131.4.69:3000/get-file-names?project=example").respond({});
            atServer.getFileNames("example");
            $httpBackend.flush();
        });
    });
    describe('getFileImages', function() {
        it('correct GET', function(){
            //$httpBackend.flush();
            $httpBackend.expectGET("http://104.131.4.69:3000/get-file-images?project=example").respond({});
            atServer.getFileImages("example");
            $httpBackend.flush();
        });
    });
    describe('getBuildAssets', function() {
        it('correct GET', function(){
            //$httpBackend.flush();
            $httpBackend.expectGET("http://104.131.4.69:3000/get-build-assets?project=example").respond({});
            atServer.getBuildAssets("example");
            $httpBackend.flush();
        });
    });
    describe('getProjects', function() {
        it('correct GET', function(){
            //$httpBackend.flush();
            $httpBackend.expectGET("http://104.131.4.69:3000/get-projects").respond({});
            atServer.getProjects();
            $httpBackend.flush();
        });
    });
    describe('getFileData', function() {
        it('correct GET', function(){
            //$httpBackend.flush();
            $httpBackend.expectPOST("http://104.131.4.69:3000/get-file-data").respond({});
            atServer.getFileData('example', 'pls');
            $httpBackend.flush();
        });
    });
});