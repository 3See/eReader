'use strict';

//Global authentication service
angular.module('mean').factory('Authentication', [
    function() {
        var _this = this;
        _this._data = {
            user: window.user,
            authenticated: !! window.user
        };

        return _this._data;
    }
]);
