// gizmo constructor
var gizmo = new_constructor(Object, function(id){
    this.id = id;
},{
   toString: function () {
       return "gizmo " + this.id;
   }
});

// hoozit constructor which inherits from gizmo
var hoozit = new_constructor(gizmo, function (id) {
    this.id = id;
}, {
    test: function (id) {
        return this.id === id;
    }
});

function new_contructor(extend, initializer, methods) {
    var func,
        prototype = Object.create(extend && extend.prototype);

    if (methods) {
        methods.keys().forEach(function(key) {
            prototype[key] = methods[key];
        });
    }
    func = function () {
        var that = Object.create(prototype);
        if (typeof initializer === 'function') {
            initializer.apply(that, arguments);
        }
        return that;
    }
    func.prototype = prototype;
    prototype.constructor = func;
    return func;
}


// another pattern shown to have powerful constructors...
function myPowerfulConstructor (x) {

    // step 1 - Make an object
    //   Object literal
    //   new
    //   Object.create
    //   call another power constructor
    var that = otherMaker (x); // initialize it somehow, returning an object

    // step 2 - define some variables and functions
    //   (these become private members)
    var private = f(x);

    // step 3 - augment the object with privileged methods
    that.privilged = function () {
        //  ... private x that ... //
    }
    return that;
}

// following this functional inheritance pattern..

function gizmo(id, secret) {
    secret = secret || {};
    secret.id = id;
    return {
        toString: function () {
            return "gizmo " + secret.id;
        }
    };
}

function hoozit(id) {
    var secret = {}; /*final*/
    var that = gizmo(id, secret);
    that.test = function (testid) {
        return testid === secret.id;
    }
    return that;
}

// super methods (don't really need that)
// there must be a way to do it simpler!
function hoozit (id) {
    var secret = {};
    var that = gizmo(id, secret);
    var super_toString = that.toString;
    that.test = function (testid) {
        return testid === secret.id;
    };
    that.toString = function() {
        return super_toString.apply(that);
    };
    return that;
}

// remember the result of previous calls
// to a function (recursive for example)
function memoizer(memo, formula) {
    var recur = function(n) {
        if (typeof result !== 'number') {
            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};

// examples
var factorial = memoizer([1, 1], function (recur, n) {
   return n * recur(n - 1);
});

var fibonacci = memoizer([0, 1], function (recur) {
   return recur(n - 1) + recur(n - 2);
});