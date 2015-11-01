// Closure

// The context of of an inner function includes the scope of the outer function.
// An inner function enjoys that context even after the parent functions have returned.


// example 1
var digit_name = (function (n) {
    var names;

    return function(n) {
        if (!names) // only initialize the outer scope variable the first time we call the function
            names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        return names[n];
    };
})();

alert(digit_name(3)); // 'three'


// example 2
function fade(id) {
    var dom = document.getElementById(id),
        level = 1;

    function step() {
        var h = level.toString(16);
        dom.style.backgroundColor =
            '#FFFF' + h + h;
        if (level < 15) {
            level +=1;
            setTimeout(step, 100);
        }
    }
    setTimeout(step, 100);
}

// example 3
if (typeof Object.prototype.later !== 'function') {
    Object.prototype.later = function (msec, method) {
        var that = this,
            args = Array.slice(2);
        if (typeof method === 'string') {
            method = that[method];
        }
        setTimeout(function() {
            method.apply(that, args);
        }, msec);
        return that; // cascade
    }
}

// example 4 : partial application

function curry(func) {
    var args  = arguments.slice(1); // get only the second param, the first one is the function
    return function () {
        return func.apply(null,
                    args.concat(arguments.slice())); // we call slice to convert arguments to an array object tyoe
    }
}

var inc = curry(function add(a, b) {
    return a + b;
}, 1);

alert(inc(6));// 7


// example 5 : promise maker
function make_promise() {
    var status = 'unresolved',
        outcome,
        waiting = [], // functions registered with 'when'
        dreading = []; // funtions registered with 'fail'

    function vouch(deed, func) {
        switch (status) {
            case 'unresolved':
                (deed === 'fulfilled' ? waiting : dreading)
            .push(func);
                break;
            case deed:
                func(outcome);
                break;
        }
    };

    function resolve(deed, value) {
        if (status !== 'unresolved') {
            throw new Error(
                'The promise has already been resolved: ' + status);
        }
        status = deed;
        outcome = value;
        (deed === 'fulfilled' ? waiting : dreading)
                .forEach(function (func) {
            try {
                func(outcome);
            } catch (ignore) {}
        });
        waiting = null;
        dreading = null;
    };

    return {
        when: function (func) {
            vouch('fulfulled', func);
        },
        fail : function (func) {
            vouch('smashed', func);
        },
        fulfill: function (value) {
            resolve('fulfilled', value);
        },
        smash: function (string) {
            resolve('smashed', string);
        },
        status: function () {
            return status;
        }
    }
}


// example 6 sealer/unsealer

function make_sealer() {
    var boxes = [], values = [];

    return {
        sealer: function (value) {
            var i = boxes.length,
                box = {};
            boxes[i] = box;
            values[i] = value;
            return box;
        },
        unsealer: function (box) {
            return values[boxes.indexOf(box)];
        }
    };
};