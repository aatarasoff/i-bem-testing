modules.define(
    'spec',
    ['auth', 'i-bem__dom', 'jquery', 'BEMHTML', 'sinon'],
    function(provide, Auth, BEMDOM, $, BEMHTML, sinon) {

describe('auth', function() {
    var auth;

    beforeEach(function() {
        auth = BEMDOM.init($(BEMHTML.apply({ block : 'auth', js : true, content: [ 'text' ] })).appendTo('body'))
            .bem('auth');
    });

    afterEach(function() {
        BEMDOM.destruct(auth.domElem);
    });


    describe('click', function() {
        it('should be awesome', function() {
            var spy = sinon.spy();

            auth
                .on('focus', spy)
                .domElem
                    .trigger('click');

            auth.hasMod('focused').should.be.true;
        });

    });

});

provide();

});
