// method form ('this' to to thisObject here)
var thisObject = {
    prop : 'prop',
    methodName : function() {
        console.log(this.prop);
    }
};
thisObject.methodName();


// function form ('this' bound to undefined in ES5)

// does not access 'this' outer to the function scope
// it has its own 'this'
// must declare 'that' in the outer scope;
this.prop = 5;
var that = this;
var functionObject = function() {
    console.log(that.prop);
}
functionObject();


// constructor form ('this' bound to new object)

// if there is not an explicit return value, the
// value of 'this' will be returned
var args = [];
function FunctionValue(){
    this.prop = 'hello';
}
var aFirstInstanceOfFunctionValue = new FunctionValue(args);
var aSecondInstanceOfFunctionValue = new FunctionValue(args);
aSecondInstanceOfFunctionValue.prop = 'hello2';

console.log(aFirstInstanceOfFunctionValue.prop); // 'hello'
console.log(aSecondInstanceOfFunctionValue.prop); // 'hello2'


// apply form (specifies what 'this' is)

var args = [];
var arg = 5;
var anObject = {
    property: 'prop'
}
var anotherObject = {
    property: 'anotherProp'
}

function aFunc(){
    console.log(this.property);
}

// takes an array of arguments
aFunc.apply(anObject, args);

// takes 0 or more individual params which will become the args
aFunc.call(anotherObject, arg);
