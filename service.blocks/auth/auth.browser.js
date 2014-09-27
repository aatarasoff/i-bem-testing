modules.define(
    'auth',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {

    onSetMod: {
       'js' : {
           'inited' : function () {
                var _this = this;

                this.bindTo('click', function (e) {
                    this._setFocus(e);
                });

                this.on('focus', function () {
                    _this.setMod('focused');
                });
            }
        },
        'focused' : {
            'true' : function () {

            }
        }
    },

    _setFocus : function () {
        this.emit('focus');
    }

}));

});
