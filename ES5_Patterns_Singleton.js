// A module pattern

// to have a common global application object,
// you can do GLOBAL.myapp = ...
var singleton = (function () {
    var privateVariable;
    function privateFunction (x) {
        // ... privateVariable
    }
    return {
        firstMethods : function (a, b) {
            // private variable
        },
        secondMethod: function (c) {
            // private
        }
    }
}());
